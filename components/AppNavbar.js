import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

function AppNavbar() {
  return (
    <div className={styles.mobile}>
      <ul className={styles.AppNavLinks}>
        <li>
          <Link href="./">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-house"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              />
              <path
                fill-rule="evenodd"
                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
              />
            </svg>
          </Link>
          <Link href="./">Home</Link>
        </li>
        <li>
          <Link href="./program">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-calendar-minus"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 9.5A.5.5 0 0 1 6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
            </svg>
          </Link>

          <Link href="./program">Program</Link>
        </li>
        <li>
          <Link href="./tickets">
            <svg
              width="26"
              height="18"
              viewBox="0 0 34 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.5 2V3.25M24.5 8.25V9.5M24.5 14.5V15.75M24.5 20.75V22M9.5 13.25H18.25M9.5 17H14.5M2.625 0.75C1.59 0.75 0.75 1.59 0.75 2.625V7.66833C1.51124 8.10663 2.14354 8.73779 2.5832 9.49825C3.02285 10.2587 3.25434 11.1216 3.25434 12C3.25434 12.8784 3.02285 13.7413 2.5832 14.5018C2.14354 15.2622 1.51124 15.8934 0.75 16.3317V21.375C0.75 22.41 1.59 23.25 2.625 23.25H31.375C32.41 23.25 33.25 22.41 33.25 21.375V16.3317C32.4888 15.8934 31.8565 15.2622 31.4168 14.5018C30.9771 13.7413 30.7457 12.8784 30.7457 12C30.7457 11.1216 30.9771 10.2587 31.4168 9.49825C31.8565 8.73779 32.4888 8.10663 33.25 7.66833V2.625C33.25 1.59 32.41 0.75 31.375 0.75H2.625Z"
                stroke="#1E1E1E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>

          <Link href="./tickets">Tickets</Link>
        </li>
        <li>
          <Link href="./basket">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-bag-dash"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
              />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
          </Link>

          <Link href="./basket">Basket</Link>
        </li>
      </ul>
    </div>
  );
}

export default AppNavbar;
