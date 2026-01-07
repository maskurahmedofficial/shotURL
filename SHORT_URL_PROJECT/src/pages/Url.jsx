const handleShort = async (e) => {
  e.preventDefault();

  if (!longUrl) {
    setError("long url required");
    return;
  }

  setError("");

  try {
    const res = await axios.post(
      "https://short-url-project-mu.vercel.app/url/getURL",
      { longUrl }
    );

    setUrlResponse(res.data); // ✅ MISSING LINE
    setLongUrl("");
  } catch (error) {
    console.log(error.response?.data || error.message);
    setError("Something went wrong");
  }
};
