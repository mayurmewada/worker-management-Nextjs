import React from "react";
import fetch from "isomorphic-unfetch";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Confirm, Button, Loader, Container } from "semantic-ui-react";
import { WorkerData } from "./WorkerData";
import Context from "../../context/ContextProvider";

const Worker = ({ worker }) => {
  const [confirm, setConfirm] = useState(false);
  const [isDeleting, setIsDelecting] = useState(false);
  const router = useRouter();
  // const context = useContext(Context);
  // const [count, setCount] = context;
  // // const value = useContext(WorkerData);

  // useEffect(() => {
  //   console.log(count);
  // }, []);

  useEffect(() => {
    if (isDeleting) {
      deleteWorker();
    }
  }, [isDeleting]);

  const open = () => setConfirm(true);

  const close = () => setConfirm(false);

  const deleteWorker = async () => {
    const workerId = router.query.id;
    try {
      const deleted = await fetch(
        `http://localhost:3000/api/workers/${workerId}`,
        {
          method: "DELETE",
        }
      );

      router.push("/");
    } catch {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    setIsDelecting(true);
    close();
  };

  return (
    <>
      {/* <WorkerData> */}
      <Container>
        <div className="worker-container">
          {isDeleting ? (
            <Loader active />
          ) : (
            <>
              <h3>Employee ID : {worker._id.slice(-6, -1)}</h3>
              <h1>Fullname : {worker.fullName}</h1>
              <p>Role : {worker.role}</p>
              <p>Gender : {worker.gender}</p>
              <p>Phone No. : {worker.phoneNo}</p>
              <p>Alternate No. : {worker.alternateNo}</p>
              <p>Address : {worker.address}</p>
              <Link href={`/worker/${worker._id}/edit`}>
                <Button color="blue">Edit</Button>
              </Link>
              <Button color="red" onClick={open}>
                Delete
              </Button>
            </>
          )}
          <Confirm open={confirm} onCancel={close} onConfirm={handleDelete} />
        </div>
        {/* <button onClick={() => setCount(count + 1)}>
          COunt Increase : {count}
        </button> */}
      </Container>
      {/* </WorkerData> */}
    </>
  );
};

Worker.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/workers/${id}`);

  const { data } = await res.json();

  const worker = { worker: data };
  return worker;
};

export default Worker;
