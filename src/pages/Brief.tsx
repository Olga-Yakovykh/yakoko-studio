const Brief = () => {
    return (
      <div className="min-h-screen bg-foreground flex items-center justify-center px-6">
        <div className="w-full max-w-4xl">
          <h1 className="text-3xl font-semibold text-background text-center mb-4">
            Website Project Brief
          </h1>
  
          <p className="text-background/70 text-center mb-8">
            This will take 2–3 minutes. You can skip any question.
          </p>
  
          <iframe
            src="https://8jlsnbmt.forms.app/website-project-brief"
            className="w-full h-[85vh] rounded-xl border-0"
            loading="lazy"
          />
        </div>
      </div>
    );
  };
  
  export default Brief;
  