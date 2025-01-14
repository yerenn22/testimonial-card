export const TestimonialCard = () => {
  return (
    <article className="mt-[200px] flex w-[340px] flex-col gap-4 self-start rounded-lg bg-white p-6 [box-shadow:0px_1px_3px_0px_rgba(0,_0,_0,_10%),_0px_1px_2px_-1px_rgba(0,_0,_0,_10%)]">
      <header className="flex gap-4">
        <img
          className="h-12 w-12"
          src="/testimonial-card/profile-thumbnail.png"
          alt="Photo of Sarah Doe"
        />

        <div>
          <h3 className="font-body mb-[1px] text-lg font-semibold text-neutral-900">
            Sarah Dole
          </h3>
          <p className="font-body text-sm text-neutral-600">@sarahdole</p>
        </div>
      </header>

      <p className="font-body text-neutral-600">
        I've been searching for high-quality abstract images for my design
        projects, and I'm thrilled to have found this platform. The variety and
        depth of creativity are astounding!
      </p>
    </article>
  );
};
