﻿// src/components/ExternalApi.js

import React, { useState } from "react";
import calcStore from '../apis/calcStore';

const ExternalApi = (props) => {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");

  const callApi = async () => {
    try {

      const response = await calcStore(window.Configuration.storeUrl).get("authors", {
        headers: {
          Authorization: `Bearer ${props.idToken}`
        }
      });

      const responseData = response.data;

      setShowResult(true);
      setApiMessage(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>External API</h1>
      <button onClick={callApi}>Ping API</button>
      {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>}
    </div>
  );
};

export default ExternalApi;