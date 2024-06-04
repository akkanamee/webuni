const links = [
  {
    name: 'Про сайт',
    href: '#aboutUs'
  },
  {
    name: 'Галерея картинок',
    href: '#photos'
  },
  {
    name: 'Новини',
    href: '#news'
  },
  {
    name: 'Контакти',
    href: '#contacts'
  },
]

export const Navbar = () => (
  <nav className="navbar">
    <img 
      src="/nupp-logo.png"
      alt='Національний університет "Полтавська політехніка імені Юрія Кондратюка"'
      className="navbarLogo"  
    />
    <div className="navbarBox">
      {links.map(link => 
        <a href={link.href}>{link.name}</a>
      )}
    </div>
  </nav>
);
