import { Input } from "@/design-system";
import { JiraProvider } from "@/providers";
import React, { useContext } from "react";

export const Entry = () => {
  const [description, setDescription] = React.useState("");
  const context = useContext<JiraProvider.ContextType>(JiraProvider.Context);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    context.addEntry(description);

    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Description"
        name="description"
        value={description}
        onChange={(e) => setDescription(e)}
      />
    </form>
  );
};
