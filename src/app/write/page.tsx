export default function Write() {
  return (
    <div>
      <h4>글작성</h4>
      <form action="api/post/new" method="POST">
        <div className="grid gap-6 mb-6 ">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              TITLE
            </label>
            <input
              name="title"
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              CONTENT
            </label>
            <textarea
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="content"
            />
          </div>
          <button type="submit">전송</button>
        </div>
      </form>
    </div>
  );
}
