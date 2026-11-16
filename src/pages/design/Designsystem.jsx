// SIDEN ÅPNES VED Å LEGGE TIL /design etter localhost. eksempelvis slik: http://localhost:5174/design

import DesignSystemNav from "../../components/DesignSystemNav";

// Helper component
function ColorSwatch({ hex, name }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-20 h-20 rounded-lg border border-white/20 mb-2"
        style={{ backgroundColor: hex }}
      />
      <p className="text-sm opacity-80">{name}</p>
      <p className="text-xs opacity-50">{hex}</p>
    </div>
  );
}

export default function Designsystem() {
  return (
    <div className="w-full min-h-screen bg-[#0a0a12] text-white px-8 py-16 font-main">
      {/* NAV */}
      <DesignSystemNav />

      {/* HEADER */}
      <h1 className="text-5xl md:text-7xl font-neon text-center mb-20 tracking-widest">
        PlayLoop Design System
      </h1>

      {/* ============================
          1. FARGEPALETT
      ============================ */}
      <section className="max-w-[900px] mx-auto mb-24">
        <h2 className="text-3xl font-display mb-6 tracking-wide text-[#57C9D3]">
          1. Fargepalett
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          <ColorSwatch hex="#0a0a12" name="Bakgrunn mørk" />
          <ColorSwatch hex="#EADCBE" name="Kort bakgrunn" />
          <ColorSwatch hex="#ff00ff" name="Neon rosa" />
          <ColorSwatch hex="#00ffff" name="Neon cyan" />
          <ColorSwatch hex="#ffff00" name="Gul tekst" />
          <ColorSwatch hex="#B7A0B8" name="Støvrosa" />
          <ColorSwatch hex="#D6C3D5" name="Lys lilla" />
          <ColorSwatch hex="#726F98" name="Mørk lilla" />
        </div>
      </section>

      {/* ============================
          2. TYPOGRAFI
      ============================ */}
      <section className="max-w-[900px] mx-auto mb-24">
        <h2 className="text-3xl font-display mb-6 tracking-wide text-[#57C9D3]">
          2. Typografi
        </h2>

        <div className="space-y-4">
          <p className="font-main text-xl">Font Main: Fredoka</p>
          <p className="font-retro text-xl">Font Retro: VT323</p>
          <p className="font-neon text-3xl">Font Neon: Bungee Shade</p>
          <p className="font-display text-3xl">
            Font Display: Schibsted Grotesk
          </p>
        </div>

        <pre className="overflow-x-auto bg-black/40 p-4 rounded-lg text-sm leading-relaxed mt-6">
          text-xs → text-7xl tracking-wide uppercase font-bold / font-black
        </pre>
      </section>

      {/* ============================
          3. SPACING
      ============================ */}
      <section className="max-w-[900px] mx-auto mb-24">
        <h2 className="text-3xl font-display mb-6 tracking-wide text-[#57C9D3]">
          3. Spacing (margin & padding)
        </h2>

        <pre className="overflow-x-auto bg-black/40 p-4 rounded-lg text-sm leading-relaxed">
          Margin: m-0 m-2 m-4 m-6 m-8 m-12 m-16 mt-* mb-* mx-* my-* Padding: p-2
          p-4 p-6 p-8 p-10 p-12 pt-* pb-* px-* py-*
        </pre>
      </section>

      {/* ============================
          4. LAYOUT
      ============================ */}
      <section className="max-w-[900px] mx-auto mb-24">
        <h2 className="text-3xl font-display mb-6 tracking-wide text-[#57C9D3]">
          4. Layout
        </h2>

        <pre className="overflow-x-auto bg-black/40 p-4 rounded-lg text-sm leading-relaxed">
          w-full max-w-[1400px] h-screen min-h-[200px] relative absolute top-0
          left-0 right-0 overflow-visible overflow-hidden
        </pre>
      </section>

      {/* ============================
          5. KOMPONENTER
      ============================ */}
      <section className="max-w-[900px] mx-auto mb-24">
        <h2 className="text-3xl font-display mb-6 tracking-wide text-[#57C9D3]">
          5. Komponentbibliotek
        </h2>

        {/* BUTTON */}
        <h3 className="text-2xl font-bold mb-4 text-[#B7A0B8]">A. Knapp</h3>
        <pre className="overflow-x-auto bg-black/40 p-4 rounded-lg text-sm leading-relaxed mb-10">
          &lt;button className="px-6 py-3 bg-cyan-500 text-black font-bold
          rounded-lg hover:bg-cyan-400 transition"&gt; Klikk meg &lt;/button&gt;
        </pre>

        {/* CARD */}
        <h3 className="text-2xl font-bold mb-4 text-[#B7A0B8]">B. Kort</h3>
        <pre className="overflow-x-auto bg-black/40 p-4 rounded-lg text-sm leading-relaxed mb-10">
          &lt;div className="bg-white text-black rounded-xl p-6 shadow-lg"&gt;
          &lt;h3 className="text-2xl font-bold mb-4"&gt;Korttittel&lt;/h3&gt;
          &lt;p className="text-base opacity-80 mb-6"&gt;Tekst inni
          kortet.&lt;/p&gt; &lt;button className="px-4 py-2 bg-black text-white
          rounded-md"&gt;Les mer&lt;/button&gt; &lt;/div&gt;
        </pre>

        {/* BADGE */}
        <h3 className="text-2xl font-bold mb-4 text-[#B7A0B8]">C. Badge</h3>
        <pre className="overflow-x-auto bg-black/40 p-4 rounded-lg text-sm leading-relaxed mb-10">
          &lt;span className="px-3 py-1 bg-[#57C9D3] text-black rounded-full
          text-sm font-bold"&gt; NEW &lt;/span&gt;
        </pre>

        {/* OVERLAY */}
        <h3 className="text-2xl font-bold mb-4 text-[#B7A0B8]">D. Overlay</h3>
        <pre className="overflow-x-auto bg-black/40 p-4 rounded-lg text-sm leading-relaxed">
          &lt;div className="fixed inset-0 bg-black/60
          backdrop-blur-sm"&gt;&lt;/div&gt;
        </pre>
      </section>

      {/* ============================
          6. ANIMASJONER
      ============================ */}
      <section className="max-w-[900px] mx-auto mb-24">
        <h2 className="text-3xl font-display mb-6 tracking-wide text-[#57C9D3]">
          6. Animasjoner
        </h2>

        <pre className="overflow-x-auto bg-black/40 p-4 rounded-lg text-sm leading-relaxed">
          title-boom → hovedtittel-smash shardFly → cyan shards som flyr ut
          flicker → neon blink shadow-pulse → scoreboard glow
        </pre>
      </section>

      {/* ============================
          7. DESIGNOPPSKRIFTER
      ============================ */}
      <section className="max-w-[900px] mx-auto mb-24">
        <h2 className="text-3xl font-display mb-6 tracking-wide text-[#57C9D3]">
          7. Designoppskrifter
        </h2>

        {/* HERO */}
        <h3 className="text-2xl font-bold mb-4 text-[#B7A0B8]">
          A. Hero-seksjon
        </h3>
        <pre className="overflow-x-auto bg-black/40 p-4 rounded-lg text-sm leading-relaxed mb-10">
          &lt;section className="w-full py-20 px-6 text-center"&gt; &lt;h1
          className="text-5xl md:text-7xl font-neon tracking-tight mb-6"&gt;
          Hero Title &lt;/h1&gt; &lt;p className="text-xl md:text-2xl opacity-80
          max-w-[700px] mx-auto"&gt; Undertekst som forklarer hva dette handler
          om. &lt;/p&gt; &lt;/section&gt;
        </pre>

        {/* GRID */}
        <h3 className="text-2xl font-bold mb-4 text-[#B7A0B8]">
          B. Grid med kort
        </h3>
        <pre className="overflow-x-auto bg-black/40 p-4 rounded-lg text-sm leading-relaxed">
          &lt;div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-8"&gt; ...cards... &lt;/div&gt;
        </pre>
      </section>

      {/* FOOTER */}
      <p className="text-center opacity-50 mt-20 text-sm">
        PlayLoop Design System © Åshild
      </p>
    </div>
  );
}
