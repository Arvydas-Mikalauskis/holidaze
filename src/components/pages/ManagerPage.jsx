import React from 'react'

const ManagerPage = () => {
  return (
    <section className="my-12">
      <div className="text-center mt-24">
        <h1 className="text-2xl font-semibold">Welcome back, Manager</h1>
      </div>
      <div className="bg-platinum flex flex-col max-w-lg mx-auto">
        <div className="flex  justify-evenly">
          <div>
            <img src="" alt="profile picture" />
          </div>
          <div>
            <p>Manager Name</p>
            <p>Manager Email</p>
            <p>Manager Phone</p>
            <p>Manager Address</p>
          </div>
        </div>
        <div className="flex space-x-12 mx-auto">
          <button>Edit Profile</button>
          <button>Add property</button>
        </div>
      </div>
      <div className="mt-24 text-center">
        <h2 className="text-2xl font-semibold">Managed venues</h2>
        <div>
          <ul>
            <li>Property 1</li>
            <li>Property 2</li>
            <li>Property 3</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ManagerPage
