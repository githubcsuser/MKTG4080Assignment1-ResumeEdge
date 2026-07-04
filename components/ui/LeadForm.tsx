"use client";

import { useState, FormEvent } from "react";
import CTAButton from "./CTAButton";
import ComingSoonModal, { useComingSoonModal } from "./ComingSoonModal";

function GoogleIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c3.42-3.15 5.384-7.786 5.384-13.615z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
      />
      <path
        fill="#FBBC05"
        d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.997 8.997 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
      />
    </svg>
  );
}

export default function LeadForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wantsTips, setWantsTips] = useState(true);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { isOpen, open, close } = useComingSoonModal();
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    terms?: string;
  }>({});

  function validate() {
    const next: { email?: string; password?: string; terms?: string } = {};
    if (!email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email";
    if (!password) next.password = "Password is required";
    else if (password.length < 8)
      next.password = "Password must be at least 8 characters";
    if (!agreedToTerms)
      next.terms = "You must agree to the terms and conditions";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  }

  function handleGmailRegister(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    open();
  }

  if (submitted) {
    return (
      <div className="p-6 bg-green/10 border border-green/30 rounded-lg text-black">
        <p className="font-bold text-green mb-2 text-lg">You&apos;re all set!</p>
        <p className="text-base leading-relaxed">
          Thanks for signing up. ResumeEdge is still in beta. ResumeEdge will
          contact you at launch.
        </p>
      </div>
    );
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="conversion-lead-form">
      <div className="form-field">
        <label htmlFor="email" className="text-sm font-bold text-black">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="jane@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="conversion-input"
          autoComplete="email"
        />
        {errors.email && (
          <span className="text-xs text-red-600">{errors.email}</span>
        )}
      </div>
      <div className="form-field">
        <label htmlFor="password" className="text-sm font-bold text-black">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="At least 8 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="conversion-input"
          autoComplete="new-password"
        />
        {errors.password && (
          <span className="text-xs text-red-600">{errors.password}</span>
        )}
      </div>
      <div className="conversion-lead-form__checkboxes">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={wantsTips}
            onChange={(e) => setWantsTips(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-black/20 text-green focus:ring-green/40"
          />
          <span className="text-sm text-black/80 leading-snug group-hover:text-black transition-colors">
            Send me job market tips by email
          </span>
        </label>
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={agreedToTerms}
            onChange={(e) => {
              setAgreedToTerms(e.target.checked);
              if (e.target.checked && errors.terms) {
                setErrors((prev) => ({ ...prev, terms: undefined }));
              }
            }}
            className="mt-1 h-4 w-4 rounded border-black/20 text-green focus:ring-green/40"
          />
          <span className="text-sm text-black/80 leading-snug group-hover:text-black transition-colors">
            I agree to the terms and conditions
          </span>
        </label>
        {errors.terms && (
          <span className="text-xs text-red-600">{errors.terms}</span>
        )}
      </div>
      <div className="conversion-lead-form__actions">
        <CTAButton type="submit" className="conversion-lead-form__submit">
          Register to start
        </CTAButton>
        <button
          type="button"
          onClick={handleGmailRegister}
          className="conversion-lead-form__gmail"
        >
          <GoogleIcon />
          Register by Gmail
        </button>
      </div>
    </form>
    <ComingSoonModal
      open={isOpen}
      onClose={close}
      titleId="lead-form-notice-title"
    />
    </>
  );
}
