import styled from "styled-components";

export const MenuHeader = () => {
  const lichChieu = [
    { key: "lich-chieu", value: "Lịch chiếu phim" },
    { key: "lich-chieu-rap", value: "Lịch chiếu rạp" },
  ];

  const others = [
    { key: "about", value: "Về chúng tôi" },
    { key: "quang-cao", value: "Dịch vụ quảng cáo" },
    { key: "tuyen-dung", value: "Tuyển dụng" },
  ];

  return (
    <StyledMenuHeader>
      <Select text={"Lịch chiếu"} list={lichChieu} />
      <a href="/he-thong-rap">Hệ thống rạp</a>
      <a href="/cua-hang">Cửa hàng</a>
      <a href="/khuyen-mai">Khuyến mại/Sự kiện</a>
      <Select text={"Khác"} list={others} />
    </StyledMenuHeader>
  );
};

const StyledMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  a {
    text-decoration: none;
    margin: 0 5px;
    color: #ffffffcc;
  }
`;

const Select = ({ text, list }) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle border-0"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ backgroundColor: "transparent", color: "#FFFFFFCC" }}
      >
        {text}
      </button>
      <ul
        className="dropdown-menu"
        aria-labelledby="dropdownMenuButton1"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          border: "1px solid #777777",
        }}
      >
        {list?.map((item, index) => (
          <li key={index} style={{ margin: 0, padding: "2px 10px" }}>
            <a className="" href={`/${item.key}`}>
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
