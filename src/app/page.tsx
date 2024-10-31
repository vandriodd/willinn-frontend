import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Image src='/logo.svg' alt='Willinn Logo' width={200} height={200} />
    </main>
  )
}
