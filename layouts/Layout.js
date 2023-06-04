import Link from "next/link";
import { Badge } from "antd";
import styles from "@/styles/Home.module.css";
import { useContext } from "react";
import { useRouter } from "next/router";
import { StoreContext } from "@/contexts/storeContext";
import AppNavbar from "@/components/AppNavbar";

export default function Layout({ children }) {
  const badgeStyle = {
    backgroundColor: "#DFFE08",
    color: "black",
  };
  const { data } = useContext(StoreContext);
  const itemCount = data.basket.reduce((total, item) => total + item.amount, 0); // const CartIcon = ({ itemCount })
  const router = useRouter();
  const isHomePage = router.pathname === "/";
  const logoVisibility = isHomePage ? "hidden" : "visible";
  const textColor = isHomePage ? "white" : "var(--main-black)";
  const svgColor = isHomePage ? "white" : "var(--main-black)";

  return (
    <>
      <nav className={`${styles.Navbar} ${styles.mobileHidden}`}>
        <Link href="./">
          <img
            className={styles.Logo}
            src="/pics/fooLogo.svg"
            alt="Logo"
            style={{ visibility: logoVisibility }}
          ></img>
        </Link>
        <ul className={styles.navLinks}>
          <li>
            <Link href="./lineup">
              {" "}
              <a style={{ color: textColor }}>LINE-UP</a>
            </Link>
          </li>
          <li>
            <Link href="./program">
              {" "}
              <a style={{ color: textColor }}>PROGRAM</a>
            </Link>
          </li>
          <li>
            <Link href="./tickets">
              {" "}
              <a style={{ color: textColor }}>TICKETS</a>
            </Link>
          </li>
        </ul>
        <div className={styles.navIcons}>
          <Badge count={itemCount} style={badgeStyle}>
            <Link href="./basket">
              <img
                src="/pics/ticket.svg"
                alt="Cart"
                style={{ stroke: svgColor }}
              />
            </Link>
          </Badge>

          <img
            src="/pics/user.svg"
            alt="Profile"
            style={{ stroke: svgColor }}
          />
        </div>
      </nav>
      <main>{children}</main>
      <div className={`${styles.Footer} ${styles.mobileHidden}`}>
        <div className={styles.Footerbox}>
          <div className={styles.leftFooter}>
            <img
              className={styles.longLogo}
              src="/pics/longLogo.svg"
              alt="Logo"
            ></img>
            <p>Svinoy bygd, Faroe Islands</p>
            <a href="tel: +45 85 85 85 85">+45 85 85 85 85</a> <br></br>
            <a href="mailto: abc@example.com">info@foofest.dk</a>
            <br></br>
          </div>
          <div>
            <ul>
              <li>
                <Link href="./about">ABOUT</Link>
              </li>
              <li>
                <a href="./program">PROGRAM</a>
              </li>
              <li>
                <Link href="./tickets">TICKETS</Link>
              </li>
            </ul>
          </div>{" "}
          <div>
            <ul>
              <li>
                <Link href="#">FAQ</Link>
              </li>
              <li>
                <a href="#">TERMS & CONDITIONS</a>
              </li>
              <li>
                <a href="#">PRIVACY POLICY</a>
              </li>
              <li>
                <Link href="#">COOKIE POLICY</Link>
              </li>
            </ul>
          </div>
        </div>

        <p className={styles.copyright}>
          © This is a student project website. 2023
        </p>
      </div>
      <AppNavbar />
    </>
  );
}
