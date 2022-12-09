import { Form } from "@remix-run/react";

export function SearchBar() {
  return (
    <div className="flex-auto w-16 px-2 py-2 border-2 border-solid border-zinc-500 rounded-lg">
      <Form className="py-2">
        <label htmlFor="search">
          <input
            className="w-full"
            id="search"
            name="search"
            type="text"
            placeholder="search"
          />
        </label>
      </Form>
      <hr />
      <p>World Cup</p>
    </div>
  );
}
