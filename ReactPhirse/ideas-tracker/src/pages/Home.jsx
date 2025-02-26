import React, {useState} from "react";
import { useUser } from "../Context/User";
import { useIdeas } from "../Context/ideas";

function Home() {
  const user = useUser();
  const ideas = useIdeas();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    try {
        await ideas.add({userId: user.current.$id, title, description});
        setTitle("");
        setDescription("");
    } catch (error) {
        console.error(error)
    }
  };

  return (
    <>
      {user.current ? (
        <section>
          <h2>Submit Idea</h2>
          <form action="">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <textarea
              placeholder="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </section>
      ) : (
        <h2>Please Login to submit an Idea</h2>
      )}

      <section>
        <h2>Latest Ideas</h2>
        <ul>
            {ideas.current.map((idea) => (
                <li key={idea.$id} className="flex">
                    <strong>{idea.title}</strong>
                    <p>{idea.description}</p>
                    <button type="button" onClick={() => ideas.remove(idea.$id)}>
                        Remove
                    </button>
                </li>
            ))}
        </ul>
      </section>
    </>
  );
}

export default Home;
