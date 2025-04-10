import { Link } from "@tanstack/react-router";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect, useRef } from "react";

import Icon from "@mdi/react";
import {
  mdiLogin,
  mdiHome,
  mdiRhombusSplit,
  mdiBillboard,
  mdiSendCircle,
  mdiMenuOpen,
  mdiMenuClose,
  mdiFaceManProfile,
  mdiLogout,
} from "@mdi/js";

export default function Menu() {
  const { user, loginWithRedirect, logout } = useAuth0();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: Event) => {
    if (event instanceof MouseEvent && event.target instanceof HTMLDivElement) {
      if (menuRef && !menuRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
  };

  useEffect(() => {
    if (menuOpen) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="high__bar">
      <div className="high__bar-li" onClick={() => setMenuOpen(false)}>
        <Link to="/">
          <Icon path={mdiHome} size={0.7} />
          Home
        </Link>
      </div>
      <div className="high__bar-li" onClick={() => setMenuOpen(false)}>
        <Link to="/leaderboard">
          <Icon path={mdiBillboard} size={0.7} />
          Leaderboard
        </Link>
      </div>
      <div className="high__bar-li">
        <Link to="/collection">
          <Icon path={mdiRhombusSplit} size={0.7} />
          Collection
        </Link>
      </div>
      {user ? (
        <>
          <div ref={menuRef} className="high__bar-li" onClick={() => setMenuOpen(!menuOpen)}>
            {!menuOpen ? <Icon path={mdiMenuOpen} size={0.7} /> : <Icon path={mdiMenuClose} size={0.7} />}
            Menu
            {menuOpen && (
              <div className="high__bar-menu">
                <div className="high__bar-li" onClick={() => setMenuOpen(false)}>
                  <Link to="/submission">
                    <Icon path={mdiSendCircle} size={0.7} />
                    Submit
                  </Link>
                </div>
                <div className="high__bar-li" onClick={() => setMenuOpen(false)}>
                  <Link to="/profile/$userId" params={{ userId: user.sub?.slice(6) || "" }} >
                    <Icon path={mdiFaceManProfile} size={0.7} />
                    Profile
                  </Link>
                </div>
                <div className="high__bar-li" onClick={() => { setMenuOpen(false); logout() }}>
                  <Icon path={mdiLogout} size={0.7} />
                  LogOut
                </div>
              </div>
            )}
          </div>
        </>) : (
        <>
          <div className="high__bar-li" onClick={() => loginWithRedirect()}>
            <Icon path={mdiLogin} size={0.7} />
            SignIn/SignUp
          </div>
        </>
      )}
    </div>
  );
}
