const fs = require('fs')
const files = fs.readdirSync('./content/blog')

export default function Home() {
  return (
    <main className="prose">
      <h1>Blog</h1>
      <p>Welcome to the blog section of the site</p>

      <h2>List of blogs</h2>

      <ul>
        {files.map((file: any) => (
          <li key={file.toString()}>{file.toString()}</li>
        ))}
      </ul>
    </main>
  )
}
