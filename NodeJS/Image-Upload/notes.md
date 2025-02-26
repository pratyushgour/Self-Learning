### **📌 Multer File Upload - Quick Notes**  

#### **1⃣ Setting Up Multer**
- Install: `npm install multer`
- Import & Configure:
  ```js
  const multer = require("multer");

  const storage = multer.diskStorage({
      destination: (req, file, cb) => cb(null, "./uploads"), // Folder to store files
      filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
  });

  const upload = multer({ storage });
  ```

---

#### **2⃣ Handling File Uploads in Express**
**(a) Single File Upload**
```js
app.post("/upload", upload.single("profileImage"), (req, res) => {
    console.log(req.file); // File info
    res.send("File uploaded successfully!");
});
```
📌 `req.file` contains uploaded file details.

---

**(b) Multiple Files (Same Field Name)**
```js
app.post("/upload", upload.array("photos", 3), (req, res) => {
    console.log(req.files); // Array of file details
    res.send("Files uploaded!");
});
```
📌 `req.files` is an **array** of files.

---

**(c) Multiple Fields (Different Names)**
```js
app.post("/upload", upload.fields([
    { name: "profileImage", maxCount: 1 },
    { name: "anotherImage", maxCount: 1 }
]), (req, res) => {
    console.log(req.files); // Object with file details
    res.send("Files uploaded!");
});
```
📌 `req.files` is an **object** with keys matching field names.

---

#### **3⃣ Handling Errors**
- Multer throws `MulterError: Unexpected field` if field names don’t match.
- To catch errors:
  ```js
  app.post("/upload", upload.single("profileImage"), (req, res) => {
      if (!req.file) return res.status(400).send("No file uploaded!");
      res.send("Upload successful!");
  });
  ```

---

#### **4⃣ Serving Uploaded Files**
- Store files in `uploads/` and serve them:
  ```js
  app.use("/uploads", express.static("uploads"));
  ```
- Access uploaded files via:  
  `http://localhost:4000/uploads/filename.jpg`

---

#### **5⃣ Handling Form Data (`req.body`)**
- `req.body` is **empty `{}`** if no text fields are submitted.
- If using text + files, add:
  ```html
  <input type="text" name="username" placeholder="Your Name" />
  ```
- Then, `req.body` will contain:
  ```js
  console.log(req.body); // { username: "John Doe" }
  ```

---

### **✅ Final Checklist**
✅ Use `single()`, `array()`, or `fields()` correctly.  
✅ Ensure form field names match backend setup.  
✅ `req.file` → Single upload, `req.files` → Multiple uploads.  
✅ Use `express.static("uploads")` to serve uploaded files.  
✅ Add text fields to get `req.body` data.

---

### **📝 Notebook Summary**
This should cover all the key points you need! 📚📝 Let me know if you want anything extra. 🚀

