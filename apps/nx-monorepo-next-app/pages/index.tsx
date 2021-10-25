import { useState, VFC } from 'react';
import {
  PingServerResponse,
  LOCAL_SERVER_API_BASE_URL,
  isNullOrUndefined,
} from '@joey-mckenzie-io-blog-samples/shared';

const Index: VFC = () => {
  const [serverResponse, setServerResponse] = useState<string>();

  const pingServer = async () => {
    const serverResponse = await fetch(
      `${LOCAL_SERVER_API_BASE_URL}/ping?from=next`
    );
    const deserializedResponse: PingServerResponse =
      await serverResponse.json();

    setServerResponse(deserializedResponse.message);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center gap-y-4">
        <button
          onClick={pingServer}
          className="
      bg-blue-500
      dark:bg-blue-800
      hover:bg-blue-700
      dark:hover:bg-blue-900
      text-white
      dark:text-blue-400
      font-bold
      py-2
      px-4
      rounded
    "
        >
          Ping
        </button>
        {!isNullOrUndefined(serverResponse) && (
          <p className="text-black dark:text-white">{serverResponse}</p>
        )}
      </div>
    </>
  );
};

export default Index;
