function WithPayloadType<T>() {
  return (t: T) => ({ payload: t });
}

export default WithPayloadType;
