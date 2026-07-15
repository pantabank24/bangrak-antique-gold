export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "บางรัก แอนทีค | เช็คราคาทอง ตรวจราคาทอง ประเมินราคาทอง",
  url: "https://bangrak-antique-gold.vercel.app/",
  description: "บางรัก แอนทีค | รับเช่าพระเครื่อง-พระบูชา รับซื้อของเก่าของโบราณ และกระเพาะปลาเก่า แอดไลน์ https://page.line.me/buybangrak โทร 0969128888 หรือเดินทางมาที่ร้าน https://maps.app.goo.gl/W2riCWFrxUn8LC6F8",
  navItems: [
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    line: "https://page.line.me/buybangrak",
    facebook: "https://web.facebook.com/profile.php?id=61567928181159&_rdc=1&_rdr"
  },
};
