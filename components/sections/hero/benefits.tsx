const Benefits = () => {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 lg:px-8">
      <div className="mx-auto max-w-md lg:max-w-none">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="flex justify-center bg-secondary-bg rounded-5xl p-4">
            <div className="flex gap-3 items-center">
              <h3 className="text-[75px] leading-[100%] translate-y-[30px] ">20</h3>
              <p className="text-secondary">Лет опыт руководителей направлений</p>
            </div>
          </div>
          <div className="flex justify-center bg-secondary-bg rounded-5xl p-4">
            <div className="flex gap-3 items-center">
              <h3 className="text-[75px] leading-[100%] translate-y-[30px] ">с2010</h3>
              <p className="text-secondary">Года мы работаем с клиентами</p>
            </div>
          </div>
          <div className="flex justify-center border-2 border-primary rounded-5xl p-4">
            <div className="flex gap-3 items-center">
              <h3 className="text-[75px] leading-[100%] translate-y-[30px] ">110</h3>
              <p className="text-secondary">Клиентов разного масштаба работают с нами</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
