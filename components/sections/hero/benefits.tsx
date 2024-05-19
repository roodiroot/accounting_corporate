const Benefits = () => {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 lg:px-8">
      <div className="mx-auto max-w-md lg:max-w-none">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="flex justify-center bg-secondary-bg rounded-5xl p-4">
            <div className="flex gap-3 items-center">
              <div className="text-[75px] font-bold">20</div>
              <p className="text-secondary">Лет опыт руководителей направлений</p>
            </div>
          </div>
          <div className="flex justify-center bg-secondary-bg rounded-5xl p-4">
            <div className="flex gap-3 items-center">
              <div className="text-[75px] font-bold">c2010</div>
              <p className="text-secondary">Года мы работаем с клиентами</p>
            </div>
          </div>
          <div className="flex justify-center border-2 border-primary rounded-5xl p-4">
            <div className="flex gap-3 items-center">
              <div className="text-[75px] font-bold">110</div>
              <p className="text-secondary">Клиентов разного масштаба работают с нами</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
