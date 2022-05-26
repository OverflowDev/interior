import React from 'react'

function Faq() {
  return (
    <div>
        <details className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg">
            <summary className="text-md  py-2 px-4 rounded-md bg-gray-200 leading-6 text-slate-900 dark:text-white font-semibold select-none">
            What’s you charge like?
            </summary>
            <span>
            We don’t have a specific price to our service. It all depends on the services you want from us. Kindly fill this form to let us proceed.
            </span>
        </details>
        <details className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg">
            <summary className="text-md  py-2 px-4 rounded-md bg-gray-200 leading-6 text-slate-900 dark:text-white font-semibold select-none">
            How long does it take?
            </summary>
            <span>
            We don’t have a specific time frame not until after we know exactly what you want. Kindly fill this form to let us proceed.
            </span>
        </details>
        <details className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg">
            <summary className="text-md  py-2 px-4 rounded-md bg-gray-200 leading-6 text-slate-900 dark:text-white font-semibold select-none">
            I don’t know what I want
            </summary>
            <span>
            We’ve gat you covered. We will showcase some of our work and let you decide on what you want. Also, we have a 3D solution to suit your needs. Kindly send fill this form or send us an email @ iileinteriors@gmail.com
            </span>
        </details>
        <details className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg">
            <summary className="text-md  py-2 px-4 rounded-md bg-gray-200 leading-6 text-slate-900 dark:text-white font-semibold select-none">
            What services do you offer?
            </summary>
            <span>
            We offer a unique face to your home.
            </span>
        </details>
        <details className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg">
            <summary className="text-md  py-2 px-4 rounded-md bg-gray-200 leading-6 text-slate-900 dark:text-white font-semibold select-none">
            Payment and Refund Policy
            </summary>
            <span>
            We don’t have a specific price to our service. It all depends on the services you want from us.
            </span>
        </details>
        <details className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg">
            <summary className="text-md  py-2 px-4 rounded-md bg-gray-200 leading-6 text-slate-900 dark:text-white font-semibold select-none">
            How do you reach us?
            </summary>
            <span>
            Look at your back, we are right behind you.
            Email: ileinteriors@gmail.com
            </span>
        </details>
    </div>
  )
}

export default Faq