import { Entry } from "@/types";
import { ReactNode, createContext, useReducer } from "react";

const INITIAL_STATE: Entry[] = [
  {
    id: "1",
    description: "Create a new Jira ticket",
    status: "pending",
    createdAt: "2021-08-01T12:00:00.000Z",
  },
  {
    id: "2",
    description: "Create a new Jira ticket",
    status: "progress",
    createdAt: "2021-08-01T12:00:00.000Z",
  },
];

export type ContextType = {
  entries: Entry[];
  isDragging: boolean;
  handleDrag: (isDragging: boolean) => void;
  addEntry: (description: string) => void;
};

export const Context = createContext<ContextType>({
  entries: [],
  isDragging: false,
  handleDrag: () => {},
  addEntry: () => {},
});

type EntriesActionType =
  | { type: "Add"; payload: Entry }
  | { type: "Update"; payload: Entry }
  | { type: "isDragging"; payload: boolean };

const entryReducer = (
  state: ContextType,
  action: EntriesActionType
): ContextType => {
  switch (action.type) {
    case "Add":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    case "Update":
      return {
        ...state,
        entries: state.entries.map((entry) =>
          entry.id === action.payload.id ? action.payload : entry
        ),
      };
    case "isDragging":
      return {
        ...state,
        isDragging: action.payload,
      };
    default:
      throw new Error("Unsupported action type");
  }
};

type Props = {
  children: ReactNode;
};

export const Provider = ({ children }: Props) => {
  const [entry, dispatch] = useReducer(entryReducer, {
    entries: INITIAL_STATE,
    isDragging: false,
    handleDrag: () => {},
    addEntry: () => {},
  });

  const addEntry = (description: string) => {
    const entry: Entry = {
      id: "3",
      description,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    dispatch({ type: "Add", payload: entry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: "Update", payload: entry });
  };

  const handleDrag = (isDragging: boolean) => {
    dispatch({ type: "isDragging", payload: isDragging });
  };

  return (
    <Context.Provider value={{ ...entry, addEntry, handleDrag }}>
      {children}
    </Context.Provider>
  );
};
