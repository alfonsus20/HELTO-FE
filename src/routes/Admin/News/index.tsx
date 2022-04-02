import React, { useState } from "react";
import { AxiosError } from "axios";
import { useLocation } from "react-router-dom";
import Table from "../../../components/Table";
import { useLoader } from "../../../context/LoaderContext";
import useSnackbar from "../../../hooks/useSnackbar";
import { deleteNews, getNewsList } from "../../../models/news";
import { NewsSingle } from "../../../types/entities/news";

const AdminNews = () => {
  const [newsList, setNewsList] = useState<Array<NewsSingle>>([]);
  const { setLoading } = useLoader();

  const { search } = useLocation();
  const snackbar = useSnackbar();

  const fetchNewsList = async () => {
    try {
      setLoading(true);
      const { data } = await getNewsList(search);
      if (data.data) {
        setNewsList(data.data.news);
      }
    } catch (error) {
      snackbar.error((error as AxiosError).response?.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="font-bold text-2xl mb-4">Daftar Berita Terkini</h1>
      <div className="bg-white p-5">
        <Table
          fetchFunc={fetchNewsList}
          deleteFunc={deleteNews}
          searchPlaceholder="Cari Berita Terkini"
          body={{
            id: { type: "text" },
            title: { type: "text", title: "Judul" },
            content: { type: "text", title: "Konten", wrapped: true },
            image: { type: "image", title: "Image" },
            UpdatedAt: { type: "date", title: "Tanggal" },
            createdAt: { type: "date" },
            authorId: { type: "date" },
          }}
          data={newsList}
        />
      </div>
    </div>
  );
};
export default AdminNews;
