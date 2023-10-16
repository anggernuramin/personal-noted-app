/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import "./App.css";
import { getInitialData } from "./utils";
import { Header } from "./components/Header";
import { FormAddNoted } from "./components/FormAddNoted";
import { SearchNoted } from "./components/SearchNoted";
import { CardNoted } from "./components/CardNoted";
const App = () => {
  const [datas, setDatas] = useState([]);
  const [searchCatatan, setSearchCatatan] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setDatas(getInitialData);
    setSearchResult(getInitialData);
  }, []);

  function addCatatan(newNoted) {
    const currentDate = new Date();
    const noted = {
      id: +new Date(),
      title: newNoted.title,
      body: newNoted.deskripsi,
      archived: false,
      createdAt: currentDate,
    };
    setDatas([...datas, noted]);

    if (setSearchResult.length > 0) {
      setSearchResult([...searchResult, noted]);
    }
  }
  function deleteCatatan(id) {
    setDatas(datas.filter((item) => item.id !== id));
    setSearchResult(searchResult.filter((item) => item.id !== id));
  }

  function arsipCatatan(id) {
    setDatas(datas.map((item) => (item.id === id ? { ...item, archived: true } : item)));

    setSearchResult(datas.map((item) => (item.id === id ? { ...item, archived: true } : item)));
  }

  function kembalikanCatatan(id) {
    setDatas(datas.map((item) => (item.id === id ? { ...item, archived: false } : item)));

    setSearchResult(datas.map((item) => (item.id === id ? { ...item, archived: false } : item)));
  }

  function handleSearch(e) {
    const searchKeyword = e.target.value;
    console.log("keyword", searchKeyword);
    setSearchCatatan(searchKeyword); // Update state untuk kata kunci pencarian
    const filteredData = datas.filter((item) => item.title.toLowerCase().includes(searchKeyword.toLowerCase()));
    console.log("filter", filteredData);
    setSearchResult(filteredData);
  }

  return (
    <>
      <Header />
      <FormAddNoted addCatatan={addCatatan} />
      <main className="container">
        <SearchNoted handleSearch={handleSearch} />
        <div className="wrapper-main-content">
          <div className="wrapper-Catatan-shelf">
            <h2>Catatan aktif</h2>
            <section className="Catatan-shelf">
              {searchResult.length > 0
                ? searchResult.map((item) => {
                    if (item.archived === false) {
                      return <CardNoted key={item.id} data={item} deleteCatatan={deleteCatatan} arsipCatatan={arsipCatatan} kembalikanCatatan={kembalikanCatatan} />;
                    }
                  })
                : datas.map((item) => {
                    if (item.archived === false) {
                      return <CardNoted key={item.id} data={item} deleteCatatan={deleteCatatan} arsipCatatan={arsipCatatan} kembalikanCatatan={kembalikanCatatan} />;
                    }
                  })}

              {datas.every((item) => item.archived) && <p>Tidak ada catatan</p>}
            </section>

            <h2>Diarsipkan</h2>
            <section className="Catatan-shelf">
              {searchResult.length > 0
                ? searchResult.map((item) => {
                    if (item.archived) {
                      return <CardNoted key={item.id} data={item} deleteCatatan={deleteCatatan} arsipCatatan={arsipCatatan} kembalikanCatatan={kembalikanCatatan} />;
                    }
                  })
                : datas.map((item) => {
                    if (item.archived) {
                      return <CardNoted key={item.id} data={item} deleteCatatan={deleteCatatan} arsipCatatan={arsipCatatan} kembalikanCatatan={kembalikanCatatan} />;
                    }
                  })}
              {datas.every((item) => item.archived === false) && <p>Tidak ada catatan yang Diarsipkan</p>}
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
