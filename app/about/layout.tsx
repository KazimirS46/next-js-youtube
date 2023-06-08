import Link from 'next/link';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='about'>
      <h1 className='aboutTitle'>About us</h1>
      <ul className='selectList'>
        <li>
          <Link href='/about/contacts'>Contacts</Link>
        </li>
        <li>
          <Link href='/about/team'>Team</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
