import './ExternalApi.css';
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import axios from 'axios';


const ExternalApi = (props) => {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");

  const callApi = async () => {
    try {
      const response = await axios.get(`${window.Configuration.storeServiceUrl}/api/authors`, {
        headers: {
          Authorization: `Bearer ${await props.auth.getTokenSilently()}`
        }
      });

      const responseData = response.data;

      setShowResult(true);
      setApiMessage(responseData);
    }
    catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
      callApi();
  },[showResult]);

    

  return (
    <div className="container mb-5">
      <h2>Program Authors</h2>
      {!showResult && <Loading/>}
          {showResult && <div><pre className="code">{JSON.stringify(apiMessage, null, 2)}</pre></div>}
    </div>
  );
};

export default ExternalApi;