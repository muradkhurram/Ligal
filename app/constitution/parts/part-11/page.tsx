export default function PartPlaceholderPage() {
    const partTitle = "Part 11";

    return (
        <main className="min-h-screen bg-[#fffaf3] px-6 py-16 text-[#103b2c]">
            <div className="mx-auto max-w-4xl">
                <a
                    href="/constitution/parts"
                    className="mb-10 inline-block text-sm font-medium text-[#f26b16]"
                >
                    ← Back to Constitution Parts
                </a>

                <section className="rounded-2xl border border-[#eadfd2] bg-white p-8 shadow-sm">
                    <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#f26b16]">
                        Constitution of India
                    </p>

                    <h1 className="mb-4 text-3xl font-bold">
                        {partTitle}
                    </h1>

                    <p className="text-gray-600">
                        This section is currently under development.
                        Verified constitutional content will be added here.
                    </p>
                </section>
            </div>
        </main>
    );
}
