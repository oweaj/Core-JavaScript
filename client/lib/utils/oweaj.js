const defaultOptions = {
  method: "GET",
  mode: "cors",
  body: null,
  cache: "no-cache",
  credential: "same-origin",
  redirect: "follow",
  referrerPolicy: "no-referrer",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

export const oweaj = async (options = {}) => {
  // 합성된 값에 url만 빼고 전부 받음
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: { ...defaultOptions.headers, ...options.headers },
  };

  // fetch 자체가 뱉는 값은 promise
  let response = await fetch(url, restOptions);

  if (response.ok) {
    response.data = await response.json();
  }
  return response;
};

oweaj.get = (url, options) => {
  return oweaj({
    url,
    ...options,
  });
};

oweaj.post = (url, body, options) => {
  return oweaj({
    method: "POST",
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

oweaj.put = (url, body, options) => {
  return oweaj({
    method: "PUT",
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

oweaj.delete = (url, options) => {
  return oweaj({
    method: "DELETE",
    url,
    ...options,
  });
};
