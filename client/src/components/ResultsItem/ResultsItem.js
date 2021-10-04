import s from "./ResultsItem.module.scss";

export default function ResultsItem() {
  return (
    <li className={s.item}>
      <div className={s.item__wrapper}>
        <div className={s.item__main}>
          <div className={s.item__icon}>
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="31.9999"
                cy="32"
                r="32"
                fill="#41522E"
                fillOpacity="0.05"
              />
              <g clipPath="url(#clip0)">
                <path
                  d="M29.9358 14.335C29.1647 15.0605 26.0585 17.9801 23.037 20.8213C20.0128 23.6596 17.1171 26.3847 16.5975 26.8722C16.078 27.3598 15.3397 28.0534 14.9569 28.4104C14.5741 28.7702 14.2022 29.1214 14.1311 29.1939L13.9999 29.3245L14.9022 30.3983C15.3971 30.9875 15.821 31.4692 15.8401 31.4692C15.862 31.4663 17.4889 29.9572 19.4577 28.1143C29.7882 18.4444 31.4561 16.8889 31.4753 16.8947C31.4862 16.9005 32.7604 18.0933 34.3081 19.5472C35.853 21.0012 39.3448 24.2806 42.0628 26.8374C44.7807 29.3942 47.0175 31.4866 47.0311 31.4866C47.0448 31.4866 47.0639 31.4721 47.0721 31.4576C47.0858 31.4344 47.1022 31.4373 47.1296 31.4605C47.1815 31.504 47.1022 31.5911 48.0565 30.4419C48.4749 29.9398 48.8577 29.4813 48.9096 29.4232L49.0026 29.3187L46.7112 27.1741C45.4507 25.9929 42.4893 23.2184 40.1268 21.0099C37.7671 18.7985 34.8796 16.0966 33.7093 15.0025L31.5874 13.0145H31.4643H31.3413L29.9358 14.335Z"
                  fill="#41522E"
                />
                <path
                  d="M29.605 21.0071C28.6096 21.9416 25.8589 24.5274 23.4936 26.7504L19.1952 30.7931L19.2007 39.1281L19.2089 47.4631L19.269 47.5821C19.3018 47.6489 19.3811 47.7504 19.444 47.8056C19.671 48.0145 19.3784 48 23.7124 48H27.6171L27.6225 44.3056C27.6307 40.6315 27.6307 40.614 27.6882 40.4834C27.7593 40.3151 27.896 40.17 28.0546 40.0946C28.1776 40.0336 28.1968 40.0336 31.4014 40.0249C34.9671 40.0162 34.8139 40.0104 35.0163 40.199C35.1585 40.3325 35.2378 40.4805 35.2706 40.6721C35.2925 40.7882 35.3007 41.9897 35.3007 44.4217V48L39.3585 47.9942L43.419 47.9855L43.501 47.9014C43.5475 47.8549 43.6241 47.7185 43.6733 47.5966L43.7635 47.3761L43.769 39.0759L43.7745 30.7757L37.6495 25.044C34.1768 21.7936 31.4999 19.3093 31.4698 19.3093C31.4343 19.3064 30.7944 19.8897 29.605 21.0071Z"
                  fill="#41522E"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="35"
                    height="35"
                    fill="white"
                    transform="translate(13.9999 13)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={s.info}>
            <div className={s.info__wrapper}>
              <h3 className={s.info__title}>Moscow Marriott Grand Hotel</h3>
              <div className={s.info__checkInDate}>
                <span className={s.info__date}>28 June, 2020</span>
                <span className={s.info__dah}>
                  <svg
                    width="9"
                    height="1"
                    viewBox="0 0 9 1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="-0.00012207"
                      width="9"
                      height="1"
                      rx="0.5"
                      fill="#C4C4C4"
                    />
                  </svg>
                </span>
                <span className={s.info__day}>1 день</span>
              </div>
            </div>
            <div className={s.info__opinion}>
              <span className={s.info__star}>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.65972 2.01554C7.19345 3.13037 6.62605 4.48735 6.39853 5.03221C6.17242 5.57559 5.98141 6.02595 5.98141 6.02595C5.98141 6.02595 5.54884 6.06287 5.02358 6.10273C4.49972 6.1426 3.54329 6.21495 2.89865 6.26368C2.25401 6.31388 1.37202 6.38033 0.939452 6.41282C0.506883 6.4453 0.117851 6.47631 0.075718 6.48074L-0.00012207 6.4896L0.0686958 6.559C0.10802 6.59591 0.540589 7.00197 1.02934 7.46119C1.51949 7.92041 2.16132 8.52138 2.45625 8.7975C4.23569 10.466 4.64719 10.8514 4.66404 10.8647C4.68792 10.8839 4.76797 10.5281 3.90283 14.2092C3.54329 15.7389 3.25257 16.9999 3.25257 16.9999C3.25257 16.9999 4.47304 16.2631 5.96034 15.3506C7.44625 14.4381 8.67233 13.6939 8.68497 13.6968C8.6962 13.6998 9.24394 14.0541 9.89981 14.4824C10.5571 14.912 11.536 15.5514 12.0767 15.9043C12.6174 16.2572 13.2157 16.6485 13.4067 16.7725C13.5963 16.8981 13.762 16.9999 13.762 16.9999C13.762 16.9999 13.7677 16.9748 13.762 16.9438C13.7536 16.8936 13.1848 14.1427 12.6722 11.6754C12.55 11.0818 12.4489 10.5856 12.4489 10.5724C12.4489 10.5532 13.3604 9.74104 16.658 6.81888C17.0204 6.49846 17.0246 6.49403 16.981 6.48369C16.9557 6.47779 15.5611 6.33013 13.8814 6.15441C12.2017 5.9787 10.8141 5.82957 10.7973 5.82218C10.7762 5.81332 10.7102 5.65828 10.5178 5.16362C10.3801 4.80629 9.93914 3.66784 9.53887 2.63276C9.13861 1.59767 8.74676 0.583254 8.66811 0.380962C8.58947 0.177193 8.52205 0.00738525 8.51644 1.90735e-06C8.51222 -0.00590515 8.126 0.900721 7.65972 2.01554Z"
                    fill="#6C6845"
                  />
                  <path
                    d="M7.65972 2.01554C7.19345 3.13037 6.62605 4.48735 6.39853 5.03221C6.17242 5.57559 5.98141 6.02595 5.98141 6.02595C5.98141 6.02595 5.54884 6.06287 5.02358 6.10273C4.49972 6.1426 3.54329 6.21495 2.89865 6.26368C2.25401 6.31388 1.37202 6.38033 0.939452 6.41282C0.506883 6.4453 0.117851 6.47631 0.075718 6.48074L-0.00012207 6.4896L0.0686958 6.559C0.10802 6.59591 0.540589 7.00197 1.02934 7.46119C1.51949 7.92041 2.16132 8.52138 2.45625 8.7975C4.23569 10.466 4.64719 10.8514 4.66404 10.8647C4.68792 10.8839 4.76797 10.5281 3.90283 14.2092C3.54329 15.7389 3.25257 16.9999 3.25257 16.9999C3.25257 16.9999 4.47304 16.2631 5.96034 15.3506C7.44625 14.4381 8.67233 13.6939 8.68497 13.6968C8.6962 13.6998 9.24394 14.0541 9.89981 14.4824C10.5571 14.912 11.536 15.5514 12.0767 15.9043C12.6174 16.2572 13.2157 16.6485 13.4067 16.7725C13.5963 16.8981 13.762 16.9999 13.762 16.9999C13.762 16.9999 13.7677 16.9748 13.762 16.9438C13.7536 16.8936 13.1848 14.1427 12.6722 11.6754C12.55 11.0818 12.4489 10.5856 12.4489 10.5724C12.4489 10.5532 13.3604 9.74104 16.658 6.81888C17.0204 6.49846 17.0246 6.49403 16.981 6.48369C16.9557 6.47779 15.5611 6.33013 13.8814 6.15441C12.2017 5.9787 10.8141 5.82957 10.7973 5.82218C10.7762 5.81332 10.7102 5.65828 10.5178 5.16362C10.3801 4.80629 9.93914 3.66784 9.53887 2.63276C9.13861 1.59767 8.74676 0.583254 8.66811 0.380962C8.58947 0.177193 8.52205 0.00738525 8.51644 1.90735e-06C8.51222 -0.00590515 8.126 0.900721 7.65972 2.01554Z"
                    fill="white"
                    fillOpacity="0.6"
                  />
                </svg>
              </span>
              <span className={s.info__star}>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.65972 2.01554C7.19345 3.13037 6.62605 4.48735 6.39853 5.03221C6.17242 5.57559 5.98141 6.02595 5.98141 6.02595C5.98141 6.02595 5.54884 6.06287 5.02358 6.10273C4.49972 6.1426 3.54329 6.21495 2.89865 6.26368C2.25401 6.31388 1.37202 6.38033 0.939452 6.41282C0.506883 6.4453 0.117851 6.47631 0.075718 6.48074L-0.00012207 6.4896L0.0686958 6.559C0.10802 6.59591 0.540589 7.00197 1.02934 7.46119C1.51949 7.92041 2.16132 8.52138 2.45625 8.7975C4.23569 10.466 4.64719 10.8514 4.66404 10.8647C4.68792 10.8839 4.76797 10.5281 3.90283 14.2092C3.54329 15.7389 3.25257 16.9999 3.25257 16.9999C3.25257 16.9999 4.47304 16.2631 5.96034 15.3506C7.44625 14.4381 8.67233 13.6939 8.68497 13.6968C8.6962 13.6998 9.24394 14.0541 9.89981 14.4824C10.5571 14.912 11.536 15.5514 12.0767 15.9043C12.6174 16.2572 13.2157 16.6485 13.4067 16.7725C13.5963 16.8981 13.762 16.9999 13.762 16.9999C13.762 16.9999 13.7677 16.9748 13.762 16.9438C13.7536 16.8936 13.1848 14.1427 12.6722 11.6754C12.55 11.0818 12.4489 10.5856 12.4489 10.5724C12.4489 10.5532 13.3604 9.74104 16.658 6.81888C17.0204 6.49846 17.0246 6.49403 16.981 6.48369C16.9557 6.47779 15.5611 6.33013 13.8814 6.15441C12.2017 5.9787 10.8141 5.82957 10.7973 5.82218C10.7762 5.81332 10.7102 5.65828 10.5178 5.16362C10.3801 4.80629 9.93914 3.66784 9.53887 2.63276C9.13861 1.59767 8.74676 0.583254 8.66811 0.380962C8.58947 0.177193 8.52205 0.00738525 8.51644 1.90735e-06C8.51222 -0.00590515 8.126 0.900721 7.65972 2.01554Z"
                    fill="#6C6845"
                  />
                  <path
                    d="M7.65972 2.01554C7.19345 3.13037 6.62605 4.48735 6.39853 5.03221C6.17242 5.57559 5.98141 6.02595 5.98141 6.02595C5.98141 6.02595 5.54884 6.06287 5.02358 6.10273C4.49972 6.1426 3.54329 6.21495 2.89865 6.26368C2.25401 6.31388 1.37202 6.38033 0.939452 6.41282C0.506883 6.4453 0.117851 6.47631 0.075718 6.48074L-0.00012207 6.4896L0.0686958 6.559C0.10802 6.59591 0.540589 7.00197 1.02934 7.46119C1.51949 7.92041 2.16132 8.52138 2.45625 8.7975C4.23569 10.466 4.64719 10.8514 4.66404 10.8647C4.68792 10.8839 4.76797 10.5281 3.90283 14.2092C3.54329 15.7389 3.25257 16.9999 3.25257 16.9999C3.25257 16.9999 4.47304 16.2631 5.96034 15.3506C7.44625 14.4381 8.67233 13.6939 8.68497 13.6968C8.6962 13.6998 9.24394 14.0541 9.89981 14.4824C10.5571 14.912 11.536 15.5514 12.0767 15.9043C12.6174 16.2572 13.2157 16.6485 13.4067 16.7725C13.5963 16.8981 13.762 16.9999 13.762 16.9999C13.762 16.9999 13.7677 16.9748 13.762 16.9438C13.7536 16.8936 13.1848 14.1427 12.6722 11.6754C12.55 11.0818 12.4489 10.5856 12.4489 10.5724C12.4489 10.5532 13.3604 9.74104 16.658 6.81888C17.0204 6.49846 17.0246 6.49403 16.981 6.48369C16.9557 6.47779 15.5611 6.33013 13.8814 6.15441C12.2017 5.9787 10.8141 5.82957 10.7973 5.82218C10.7762 5.81332 10.7102 5.65828 10.5178 5.16362C10.3801 4.80629 9.93914 3.66784 9.53887 2.63276C9.13861 1.59767 8.74676 0.583254 8.66811 0.380962C8.58947 0.177193 8.52205 0.00738525 8.51644 1.90735e-06C8.51222 -0.00590515 8.126 0.900721 7.65972 2.01554Z"
                    fill="white"
                    fillOpacity="0.6"
                  />
                </svg>
              </span>
              <span className={s.info__star}>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.65972 2.01554C7.19345 3.13037 6.62605 4.48735 6.39853 5.03221C6.17242 5.57559 5.98141 6.02595 5.98141 6.02595C5.98141 6.02595 5.54884 6.06287 5.02358 6.10273C4.49972 6.1426 3.54329 6.21495 2.89865 6.26368C2.25401 6.31388 1.37202 6.38033 0.939452 6.41282C0.506883 6.4453 0.117851 6.47631 0.075718 6.48074L-0.00012207 6.4896L0.0686958 6.559C0.10802 6.59591 0.540589 7.00197 1.02934 7.46119C1.51949 7.92041 2.16132 8.52138 2.45625 8.7975C4.23569 10.466 4.64719 10.8514 4.66404 10.8647C4.68792 10.8839 4.76797 10.5281 3.90283 14.2092C3.54329 15.7389 3.25257 16.9999 3.25257 16.9999C3.25257 16.9999 4.47304 16.2631 5.96034 15.3506C7.44625 14.4381 8.67233 13.6939 8.68497 13.6968C8.6962 13.6998 9.24394 14.0541 9.89981 14.4824C10.5571 14.912 11.536 15.5514 12.0767 15.9043C12.6174 16.2572 13.2157 16.6485 13.4067 16.7725C13.5963 16.8981 13.762 16.9999 13.762 16.9999C13.762 16.9999 13.7677 16.9748 13.762 16.9438C13.7536 16.8936 13.1848 14.1427 12.6722 11.6754C12.55 11.0818 12.4489 10.5856 12.4489 10.5724C12.4489 10.5532 13.3604 9.74104 16.658 6.81888C17.0204 6.49846 17.0246 6.49403 16.981 6.48369C16.9557 6.47779 15.5611 6.33013 13.8814 6.15441C12.2017 5.9787 10.8141 5.82957 10.7973 5.82218C10.7762 5.81332 10.7102 5.65828 10.5178 5.16362C10.3801 4.80629 9.93914 3.66784 9.53887 2.63276C9.13861 1.59767 8.74676 0.583254 8.66811 0.380962C8.58947 0.177193 8.52205 0.00738525 8.51644 1.90735e-06C8.51222 -0.00590515 8.126 0.900721 7.65972 2.01554Z"
                    fill="#6C6845"
                  />
                  <path
                    d="M7.65972 2.01554C7.19345 3.13037 6.62605 4.48735 6.39853 5.03221C6.17242 5.57559 5.98141 6.02595 5.98141 6.02595C5.98141 6.02595 5.54884 6.06287 5.02358 6.10273C4.49972 6.1426 3.54329 6.21495 2.89865 6.26368C2.25401 6.31388 1.37202 6.38033 0.939452 6.41282C0.506883 6.4453 0.117851 6.47631 0.075718 6.48074L-0.00012207 6.4896L0.0686958 6.559C0.10802 6.59591 0.540589 7.00197 1.02934 7.46119C1.51949 7.92041 2.16132 8.52138 2.45625 8.7975C4.23569 10.466 4.64719 10.8514 4.66404 10.8647C4.68792 10.8839 4.76797 10.5281 3.90283 14.2092C3.54329 15.7389 3.25257 16.9999 3.25257 16.9999C3.25257 16.9999 4.47304 16.2631 5.96034 15.3506C7.44625 14.4381 8.67233 13.6939 8.68497 13.6968C8.6962 13.6998 9.24394 14.0541 9.89981 14.4824C10.5571 14.912 11.536 15.5514 12.0767 15.9043C12.6174 16.2572 13.2157 16.6485 13.4067 16.7725C13.5963 16.8981 13.762 16.9999 13.762 16.9999C13.762 16.9999 13.7677 16.9748 13.762 16.9438C13.7536 16.8936 13.1848 14.1427 12.6722 11.6754C12.55 11.0818 12.4489 10.5856 12.4489 10.5724C12.4489 10.5532 13.3604 9.74104 16.658 6.81888C17.0204 6.49846 17.0246 6.49403 16.981 6.48369C16.9557 6.47779 15.5611 6.33013 13.8814 6.15441C12.2017 5.9787 10.8141 5.82957 10.7973 5.82218C10.7762 5.81332 10.7102 5.65828 10.5178 5.16362C10.3801 4.80629 9.93914 3.66784 9.53887 2.63276C9.13861 1.59767 8.74676 0.583254 8.66811 0.380962C8.58947 0.177193 8.52205 0.00738525 8.51644 1.90735e-06C8.51222 -0.00590515 8.126 0.900721 7.65972 2.01554Z"
                    fill="white"
                    fillOpacity="0.6"
                  />
                </svg>
              </span>
              <span className={s.info__star}>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.65972 2.01554C7.19345 3.13037 6.62605 4.48735 6.39853 5.03221C6.17242 5.57559 5.98141 6.02595 5.98141 6.02595C5.98141 6.02595 5.54884 6.06287 5.02358 6.10273C4.49972 6.1426 3.54329 6.21495 2.89865 6.26368C2.25401 6.31388 1.37202 6.38033 0.939452 6.41282C0.506883 6.4453 0.117851 6.47631 0.075718 6.48074L-0.00012207 6.4896L0.0686958 6.559C0.10802 6.59591 0.540589 7.00197 1.02934 7.46119C1.51949 7.92041 2.16132 8.52138 2.45625 8.7975C4.23569 10.466 4.64719 10.8514 4.66404 10.8647C4.68792 10.8839 4.76797 10.5281 3.90283 14.2092C3.54329 15.7389 3.25257 16.9999 3.25257 16.9999C3.25257 16.9999 4.47304 16.2631 5.96034 15.3506C7.44625 14.4381 8.67233 13.6939 8.68497 13.6968C8.6962 13.6998 9.24394 14.0541 9.89981 14.4824C10.5571 14.912 11.536 15.5514 12.0767 15.9043C12.6174 16.2572 13.2157 16.6485 13.4067 16.7725C13.5963 16.8981 13.762 16.9999 13.762 16.9999C13.762 16.9999 13.7677 16.9748 13.762 16.9438C13.7536 16.8936 13.1848 14.1427 12.6722 11.6754C12.55 11.0818 12.4489 10.5856 12.4489 10.5724C12.4489 10.5532 13.3604 9.74104 16.658 6.81888C17.0204 6.49846 17.0246 6.49403 16.981 6.48369C16.9557 6.47779 15.5611 6.33013 13.8814 6.15441C12.2017 5.9787 10.8141 5.82957 10.7973 5.82218C10.7762 5.81332 10.7102 5.65828 10.5178 5.16362C10.3801 4.80629 9.93914 3.66784 9.53887 2.63276C9.13861 1.59767 8.74676 0.583254 8.66811 0.380962C8.58947 0.177193 8.52205 0.00738525 8.51644 1.90735e-06C8.51222 -0.00590515 8.126 0.900721 7.65972 2.01554Z"
                    fill="#6C6845"
                  />
                  <path
                    d="M7.65972 2.01554C7.19345 3.13037 6.62605 4.48735 6.39853 5.03221C6.17242 5.57559 5.98141 6.02595 5.98141 6.02595C5.98141 6.02595 5.54884 6.06287 5.02358 6.10273C4.49972 6.1426 3.54329 6.21495 2.89865 6.26368C2.25401 6.31388 1.37202 6.38033 0.939452 6.41282C0.506883 6.4453 0.117851 6.47631 0.075718 6.48074L-0.00012207 6.4896L0.0686958 6.559C0.10802 6.59591 0.540589 7.00197 1.02934 7.46119C1.51949 7.92041 2.16132 8.52138 2.45625 8.7975C4.23569 10.466 4.64719 10.8514 4.66404 10.8647C4.68792 10.8839 4.76797 10.5281 3.90283 14.2092C3.54329 15.7389 3.25257 16.9999 3.25257 16.9999C3.25257 16.9999 4.47304 16.2631 5.96034 15.3506C7.44625 14.4381 8.67233 13.6939 8.68497 13.6968C8.6962 13.6998 9.24394 14.0541 9.89981 14.4824C10.5571 14.912 11.536 15.5514 12.0767 15.9043C12.6174 16.2572 13.2157 16.6485 13.4067 16.7725C13.5963 16.8981 13.762 16.9999 13.762 16.9999C13.762 16.9999 13.7677 16.9748 13.762 16.9438C13.7536 16.8936 13.1848 14.1427 12.6722 11.6754C12.55 11.0818 12.4489 10.5856 12.4489 10.5724C12.4489 10.5532 13.3604 9.74104 16.658 6.81888C17.0204 6.49846 17.0246 6.49403 16.981 6.48369C16.9557 6.47779 15.5611 6.33013 13.8814 6.15441C12.2017 5.9787 10.8141 5.82957 10.7973 5.82218C10.7762 5.81332 10.7102 5.65828 10.5178 5.16362C10.3801 4.80629 9.93914 3.66784 9.53887 2.63276C9.13861 1.59767 8.74676 0.583254 8.66811 0.380962C8.58947 0.177193 8.52205 0.00738525 8.51644 1.90735e-06C8.51222 -0.00590515 8.126 0.900721 7.65972 2.01554Z"
                    fill="white"
                    fillOpacity="0.6"
                  />
                </svg>
              </span>
              <span className={s.info__star}>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.65972 2.01554C7.19345 3.13037 6.62605 4.48735 6.39853 5.03221C6.17242 5.57559 5.98141 6.02595 5.98141 6.02595C5.98141 6.02595 5.54884 6.06287 5.02358 6.10273C4.49972 6.1426 3.54329 6.21495 2.89865 6.26368C2.25401 6.31388 1.37202 6.38033 0.939452 6.41282C0.506883 6.4453 0.117851 6.47631 0.075718 6.48074L-0.00012207 6.4896L0.0686958 6.559C0.10802 6.59591 0.540589 7.00197 1.02934 7.46119C1.51949 7.92041 2.16132 8.52138 2.45625 8.7975C4.23569 10.466 4.64719 10.8514 4.66404 10.8647C4.68792 10.8839 4.76797 10.5281 3.90283 14.2092C3.54329 15.7389 3.25257 16.9999 3.25257 16.9999C3.25257 16.9999 4.47304 16.2631 5.96034 15.3506C7.44625 14.4381 8.67233 13.6939 8.68497 13.6968C8.6962 13.6998 9.24394 14.0541 9.89981 14.4824C10.5571 14.912 11.536 15.5514 12.0767 15.9043C12.6174 16.2572 13.2157 16.6485 13.4067 16.7725C13.5963 16.8981 13.762 16.9999 13.762 16.9999C13.762 16.9999 13.7677 16.9748 13.762 16.9438C13.7536 16.8936 13.1848 14.1427 12.6722 11.6754C12.55 11.0818 12.4489 10.5856 12.4489 10.5724C12.4489 10.5532 13.3604 9.74104 16.658 6.81888C17.0204 6.49846 17.0246 6.49403 16.981 6.48369C16.9557 6.47779 15.5611 6.33013 13.8814 6.15441C12.2017 5.9787 10.8141 5.82957 10.7973 5.82218C10.7762 5.81332 10.7102 5.65828 10.5178 5.16362C10.3801 4.80629 9.93914 3.66784 9.53887 2.63276C9.13861 1.59767 8.74676 0.583254 8.66811 0.380962C8.58947 0.177193 8.52205 0.00738525 8.51644 1.90735e-06C8.51222 -0.00590515 8.126 0.900721 7.65972 2.01554Z"
                    fill="#6C6845"
                  />
                  <path
                    d="M7.65972 2.01554C7.19345 3.13037 6.62605 4.48735 6.39853 5.03221C6.17242 5.57559 5.98141 6.02595 5.98141 6.02595C5.98141 6.02595 5.54884 6.06287 5.02358 6.10273C4.49972 6.1426 3.54329 6.21495 2.89865 6.26368C2.25401 6.31388 1.37202 6.38033 0.939452 6.41282C0.506883 6.4453 0.117851 6.47631 0.075718 6.48074L-0.00012207 6.4896L0.0686958 6.559C0.10802 6.59591 0.540589 7.00197 1.02934 7.46119C1.51949 7.92041 2.16132 8.52138 2.45625 8.7975C4.23569 10.466 4.64719 10.8514 4.66404 10.8647C4.68792 10.8839 4.76797 10.5281 3.90283 14.2092C3.54329 15.7389 3.25257 16.9999 3.25257 16.9999C3.25257 16.9999 4.47304 16.2631 5.96034 15.3506C7.44625 14.4381 8.67233 13.6939 8.68497 13.6968C8.6962 13.6998 9.24394 14.0541 9.89981 14.4824C10.5571 14.912 11.536 15.5514 12.0767 15.9043C12.6174 16.2572 13.2157 16.6485 13.4067 16.7725C13.5963 16.8981 13.762 16.9999 13.762 16.9999C13.762 16.9999 13.7677 16.9748 13.762 16.9438C13.7536 16.8936 13.1848 14.1427 12.6722 11.6754C12.55 11.0818 12.4489 10.5856 12.4489 10.5724C12.4489 10.5532 13.3604 9.74104 16.658 6.81888C17.0204 6.49846 17.0246 6.49403 16.981 6.48369C16.9557 6.47779 15.5611 6.33013 13.8814 6.15441C12.2017 5.9787 10.8141 5.82957 10.7973 5.82218C10.7762 5.81332 10.7102 5.65828 10.5178 5.16362C10.3801 4.80629 9.93914 3.66784 9.53887 2.63276C9.13861 1.59767 8.74676 0.583254 8.66811 0.380962C8.58947 0.177193 8.52205 0.00738525 8.51644 1.90735e-06C8.51222 -0.00590515 8.126 0.900721 7.65972 2.01554Z"
                    fill="white"
                    fillOpacity="0.6"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className={s.extra}>
          <button className={s.extra__button}>
            <svg
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.3806 1.59133C18.8675 1.08683 18.2582 0.686629 17.5877 0.413583C16.9171 0.140537 16.1984 0 15.4726 0C14.7467 0 14.028 0.140537 13.3574 0.413583C12.6869 0.686629 12.0776 1.08683 11.5645 1.59133L10.4996 2.63785L9.4347 1.59133C8.39822 0.572757 6.99246 0.000527962 5.52667 0.000527973C4.06087 0.000527984 2.65511 0.572757 1.61864 1.59133C0.582163 2.6099 -0.000122059 3.99139 -0.00012207 5.43187C-0.000122081 6.87235 0.582163 8.25383 1.61864 9.2724L2.68355 10.3189L10.4996 18L18.3157 10.3189L19.3806 9.2724C19.8939 8.76814 20.3012 8.16942 20.579 7.51045C20.8569 6.85148 20.9999 6.14517 20.9999 5.43187C20.9999 4.71857 20.8569 4.01225 20.579 3.35328C20.3012 2.69431 19.8939 2.09559 19.3806 1.59133V1.59133Z"
                fill="#E55858"
              />
            </svg>
          </button>
          <span className={s.extra__price}>
            Price: <span className={s.extra__priceValue}>23 924 ₽</span>
          </span>
        </div>
      </div>
      <span className={s.item__line}></span>
    </li>
  );
}
