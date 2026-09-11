import { LayoutDashboard, Activity, Settings, Folder, ListChecks, Code, ListTree, LogOut } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Link, NavLink } from 'react-router-dom'
import '@/index.css'

export default function Sidebar() {
  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, to: '/' },
    { name: 'Daftar Proyek', icon: Folder, to: '/projects' },
    { name: 'Aktivitas', icon: Activity, to: '/activity' },
    { name: 'Semua Tasks', icon: ListChecks, to: '/tasks' },
    { name: 'Detail Proyek', icon: ListTree, to: '/project' },
  ]

  const systemItems = [
    { name: 'Pengaturan', icon: Settings, to: '/settings' },
    { name: 'Dokumentasi & API', icon: Code, to: '/dokumentasi' },
  ]

  return (
    <aside className="sidebar">
      {/* Logo & Navigasi */}
        <div className="flex flex-col">
        {/* Logo */}
            <div className="flex items-center gap-3 px-2 py-3 border-b border-gray-700/40">
              <Link to="/">
                <div className="w-10 h-10 bg-[#0b0f17] rounded-lg flex items-center justify-center shrink-0 border border-white/10 shadow-inner">
                  <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M625.6 516.8l19.2 81.6 104-38.4 4.8 14.4-110.4 40L560 824l-14.4-6.4 83.2-203.2-169.6-25.6 64 217.6c3.2 8-1.6 17.6-11.2 19.2s-17.6-1.6-19.2-11.2l-68.8-232-153.6-22.4 1.6-16 145.6 22.4-28.8-96-116.8 59.2-14.4-28.8 129.6-65.6L480 217.6 254.4 499.2l-12.8-9.6L480 190.4l9.6 6.4 27.2 11.2-96 227.2 177.6 41.6-64-268.8 16-3.2 67.2 278.4 136 32c8 1.6 14.4 11.2 11.2 19.2-1.6 8-11.2 14.4-19.2 11.2l-120-28.8zM608 512l-185.6-43.2 30.4 102.4 176 25.6L608 512z m-46.4-313.6l12.8-9.6L784 484.8l-12.8 9.6-209.6-296zM768 588.8l12.8 9.6-201.6 240-12.8-9.6 201.6-240z m-278.4 240l-11.2 11.2-232-243.2 11.2-11.2 232 243.2z" fill="#94a3bb">
                    </path>
                    <path d="M400 448m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#2F4BFF">
                    </path>
                    <path d="M640 608m-56 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0Z" fill="#2F4BFF">
                    </path>
                    <path d="M208 624c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80z m0-32c27.2 0 48-20.8 48-48s-20.8-48-48-48-48 20.8-48 48 20.8 48 48 48zM528 960c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80z m0-32c27.2 0 48-20.8 48-48s-20.8-48-48-48-48 20.8-48 48 20.8 48 48 48zM528 224c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80z m0-32c27.2 0 48-20.8 48-48s-20.8-48-48-48-48 20.8-48 48 20.8 48 48 48zM816 624c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80z m0-32c27.2 0 48-20.8 48-48s-20.8-48-48-48-48 20.8-48 48 20.8 48 48 48z" fill="#2F4BFF">
                    </path>
                  </g>
                </svg>
              </div>
            </Link>

            {/* Teks Logo */}
            <Link to="/">
              <span className="text-lg font-bold tracking-wide text-white">
              AhmadDev
              </span>
            </Link>
            </div>

      {/* Menu Navigasi */}
      <nav className="flex-1 overflow-y-auto flex flex-col gap-2 mt-6 px-2">
        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase text-gray-400 pb-2 tracking-normal">Menu Utama</span>
          {menuItems.map(({ name, icon: Icon, to }) => {
            return (
              <NavLink
                key={name}
                to={to}
                className={({ isActive }) =>
                              `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-base font-medium box-border ${
                                isActive
                                  ? 'text-white'
                                  : 'text-[#6b7280] hover:text-[#e8eaed]'
                              }`
                            }
                            style={({ isActive }) => isActive
                              ? { background: 'rgba(79,142,247,0.12)', color: '#4f8ef7' }
                              : { background: 'transparent' }
                            }
                          >
                <Icon className="w-5 h-5" />
                <span>{name}</span>
              </NavLink>
            );
          })}
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase text-gray-400 pb-2 mt-4 tracking-wider">Sistem & Dukungan</span>
            {systemItems.map(({ name, icon: Icon, to }) => {
              return (
                <NavLink
                  key={name}
                  to={to}
                  className={({ isActive }) =>
                                `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-base font-medium ${
                                  isActive
                                    ? 'text-white'
                                    : 'text-[#6b7280] hover:text-[#e8eaed]'
                                }`
                              }
                              style={({ isActive }) => isActive
                                ? { background: 'rgba(79,142,247,0.12)', color: '#4f8ef7' }
                                : { background: 'transparent' }
                              }
                            >
                  <Icon className="w-5 h-5" />
                  <span>{name}</span>
                </NavLink>
              );
            })}
          </div>
        </nav>
        </div>

      {/* Profil Pengguna */}
      <div className="flex items-center gap-2 justify-between border-t p-3 border-gray-700/40">
        <div className="flex items-center gap-2">
          <Avatar className="rounded-lg">
            <AvatarImage alt="@ahmaddev" />
            <AvatarFallback className="rounded-full text-white" style={{ background: 'linear-gradient(135deg, #4f8ef7 0%, #7c6ff7 100%)' }}>AD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white">AhmadDev</span>
            <span className="text-xs text-gray-400">Web Developer</span>
          </div>
        </div>
        <div>
          <Link to="/login" className="flex items-center gap-2 text-sm font-medium text-gray-400/60 hover:text-red-500">
              <LogOut className="w-6 h-6" />
            </Link>
          </div>
      </div>
    </aside>
  )
}
