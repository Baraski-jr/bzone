import Link from "next/link"
import React from "react"

const ResendEmailTemplate: React.FC = () => {
  return (
    <div className="font-sans leading-relaxed text-gray-800">
      <h1 className="text-green-500">Resend Email Confirmation</h1>
      <p>Dear User,</p>
      <p>
        It seems like you requested to resend the email confirmation. Please
        click the button below to confirm your email address:
      </p>
      <div className="text-center my-5">
        <Link href="https://yourwebsite.com/confirm-email">
          <a className="inline-block px-5 py-2 text-lg text-white bg-green-500 no-underline rounded">
            Confirm Email
          </a>
        </Link>
      </div>
      <p>If you did not request this, please ignore this email.</p>
      <p>
        Thank you,
        <br />
        Your Company Name
      </p>
    </div>
  )
}

export default ResendEmailTemplate
