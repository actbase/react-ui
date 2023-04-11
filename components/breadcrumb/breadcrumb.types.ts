interface BreadCrumbProps {
  // 클래스 이름
  classNames: string;
  // breadcrumb에 표시될 항목들
  items: {
    // 항목에 부여할 React.key
    key: string;
    // 항목에 부여할 이름
    label: string;
    // 항목을 클릭했을 때 이동할 주소
    href: string;
  }[];
}
