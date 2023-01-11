const postData = async (url, data) => {
  const result = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: data,
  });

  return await result.json();
};

const getResource = async (url) => {
  const result = await fetch(url);

  if (!result.ok) {
    throw new Error(`Failed to get resource ${url}, status: ${result.status}`);
  }

  return await result.json();
};

export { postData, getResource };
