import Link from 'next/link'
import React from 'react'

const Subscription = () => {
  return (
    <div className="w-full mt-20">
      <div className="container bg-gray-light flex flex-col justify-center items-center py-20 gap-6 rounded-3xl">
        <h2 className="font-urbanist text-5xl font-semibold text-primary text-center">Subscribe for Full Access</h2>
        <div className="font-urbanist text-5xl font-semibold text-primary text-center mb-6">$9.99/<sub className="capitalize text-2xl text-secondary-light">Month</sub></div>
        <Link
          href="/"
          className="btn btn-brand font-medium py-4 min-w-40 px-10 rounded-lg"
        >
          Subscribe Now
        </Link>
      </div>
    </div>
  )
}

export default Subscription