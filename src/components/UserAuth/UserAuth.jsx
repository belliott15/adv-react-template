

export default function UserAuth() {
//need a user hook

  return (
    <section>
      {user ? <Profile /> : <Auth />}
    </section>
  )
}
