/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { ErrorReq, helpHttp } from "../../helpers/helpHttp";
import { Loader } from "../loader/Loader";
import { Message } from "../message/Message";
import { Caballero, CrudState } from "../../reducers/crudReducer";
import { CREATE_DATA, DELETE_DATA, NO_DATA, UPDATE_DATA } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import {
  CrudAction,
  createAction,
  deleteAction,
  noAction,
  readAllAction,
  updateAction,
} from "../../actions/crudActions";
import { Dispatch } from "redux";

export const initialDataToEdit: Caballero = {
  id: "",
  constelation: "",
  name: "",
};

export const CrudAPI = () => {
  const { db } = useSelector<any, CrudState>((state) => state.crud);
  const dispatch = useDispatch<Dispatch<CrudAction>>();

  const [dataToEdit, setDataToEdit] = useState(initialDataToEdit);
  const [error, setError] = useState<null | ErrorReq>(null);
  const [loading, setLoading] = useState(false);

  const { get, post, put, del } = helpHttp();
  const url = "http://localhost:5000/caballeros";

  useEffect(() => {
    setLoading(true);
    get(url).then((res) => {
      if (!res.err) {
        dispatch(readAllAction(res));
        setError(null);
      } else {
        dispatch(noAction());
        setError(res);
        console.log(res);
      }

      setLoading(false);
    });
  }, [url, dispatch]);

  const createDate = (data: Caballero) => {
    data.id = Date.now() + "";

    const dataBI = JSON.stringify(data);

    const options: RequestInit = {
      body: dataBI,
      headers: { "content-type": "application/json" },
    };

    post(url, options).then((res) => {
      console.log(res);
      if (res && !res.err) {
        dispatch(createAction(res));
      } else {
        setError(res);
      }
    });
  };

  const updateDate = (data: Caballero) => {
    if (db !== null) {
      const endpoint = `${url}/${data.id}`;

      const dataBI = JSON.stringify(data);

      const options: RequestInit = {
        body: dataBI,
        headers: { "content-type": "application/json" },
      };

      put(endpoint, options).then((res) => {
        console.log(res);
        if (!res.err) {
          dispatch(updateAction(res));
        } else {
          setError(res);
        }
      });
    }
  };

  const deleteData = (id: number) => {
    if (db !== null) {
      const isDelete = confirm(
        `¿Está seguro de eliminar el registro con el id ${id}?`
      );

      if (isDelete) {
        const endpoint = `${url}/${id}`;

        const options: RequestInit = {
          headers: { "content-type": "application/json" },
        };

        del(endpoint, options).then((res) => {
          console.log(res);
          if (!res.err) {
            dispatch(deleteAction(id));
          } else {
            setError(res);
          }
        });
      } else return;
    }
  };

  return (
    <>
      <h2>Crud API</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createDate}
          updateData={updateDate}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />

        {loading && <Loader />}
        {error && (
          <Message msg={`Error ${error.statustext}`} bgColor="#dc3545" />
        )}
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </>
  );
};
