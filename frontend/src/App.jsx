import "./App.css";
import { AreaSelect } from "./components/AreaSelect";
import { Layout } from "./components/Auth/Layout";
import { Header } from "./components/Header/Header";
import { MenuHeader } from "./components/Header/MenuHeader";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { Home } from "./components/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tai-khoan" element={<Layout />} />
        <Route
          path="/he-thong-rap"
          element={
            <Header
              left={<MenuHeader />}
              right={<AreaSelect area={"Hà Nội"} />}
            />
          }
        />
        <Route
          path="/cua-hang"
          element={
            <Header
              left={<MenuHeader />}
              right={<AreaSelect area={"Hà Nội"} />}
            />
          }
        />
        <Route
          path="/khuyen-mai-su-kien"
          element={
            <Header
              left={<MenuHeader />}
              right={<AreaSelect area={"Hà Nội"} />}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <header>
  <nav className="navbar navbar-dark bg-dark fs-6 px-4">
    <div className="navbar-brand">
      <img src={logo} alt="lỗi" style={{ width: "60px", height: "60px" }} />
    </div>
    <div className="navbar-brand">
      <a class="fs-6 fw-bold" href="#">
        Lịch chiếu
      </a>
      <a class="fs-6 fw-bold" href="#">
        Hệ thống rạp
      </a>
      <a class="fs-6 fw-bold" href="#">
        Cửa hàng
      </a>
      <a class="fs-6 fw-bold" href="#">
        Khuyến mãi/Sự kiện
      </a>
      <a class="fs-6 fw-bold" href="#">
        Khác
      </a>
    </div>
    <div className="navbar-brand">
      <div class="fs-6 fw-bold">Hà Nội</div>
      <button type="button" class="btn btn-outline-light fs-6 fw-bold">
        Đăng nhập/Đăng ký
      </button>
      <ButtonByTickets text={"Mua vé"} />
    </div>
  </nav>
</header>; */
}
