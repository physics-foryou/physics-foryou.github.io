// table-of-information.js
const ap1TableOfInformationPool = {
    ap1: `
        <h2 style="font-size: 14px; text-align: center; margin-top: 0; margin-bottom: 20px; border-bottom: 2px solid var(--header-bg); padding-bottom: 10px; font-weight: bold;">
            ADVANCED PLACEMENT PHYSICS 1 TABLE OF INFORMATION
        </h2>
        
        <div style="font-weight: bold; margin-bottom: 8px; font-size: 12px;">CONSTANTS AND CONVERSION FACTORS</div>
        <table class="ref-table">
            <tr>
                <td style="width: 50%;">Universal gravitational constant,</td>
                <td style="width: 50%;">$G = 6.67 \\times 10^{-11} \\text{ m}^3/(\\text{kg}\\cdot\\text{s}^2) = 6.67 \\times 10^{-11} \\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$</td>
            </tr>
            <tr>
                <td>Magnitude of the acceleration due to gravity at Earth’s surface,</td>
                <td>$g = 9.8 \\text{ m/s}^2$</td>
            </tr>
            <tr>
                <td>Magnitude of the gravitational field strength at Earth’s surface,</td>
                <td>$g = 9.8 \\text{ N/kg}$</td>
            </tr>
            <tr>
                <td>1 atmosphere of pressure,</td>
                <td>$1 \\text{ atm} = 1.0 \\times 10^5 \\text{ N/m}^2 = 1.0 \\times 10^5 \\text{ Pa}$</td>
            </tr>
        </table>

        <div style="font-weight: bold; margin-bottom: 8px; font-size: 12px;">UNIT SYMBOLS</div>
        <table class="ref-table">
            <tr>
                <td>
                    hertz, $\\text{Hz}$<br>
                    joule, $\\text{J}$<br>
                    kilogram, $\\text{kg}$<br>
                    meter, $\\text{m}$
                </td>
                <td>
                    newton, $\\text{N}$<br>
                    pascal, $\\text{Pa}$<br>
                    second, $\\text{s}$<br>
                    watt, $\\text{W}$
                </td>
            </tr>
        </table>

        <div style="font-weight: bold; margin-bottom: 8px; font-size: 12px;">PREFIXES</div>
        <table class="ref-table">
            <tr>
                <th>Factor</th>
                <th>Prefix</th>
                <th>Symbol</th>
            </tr>
            <tr><td>$10^{12}$</td><td>tera</td><td>T</td></tr>
            <tr><td>$10^9$</td><td>giga</td><td>G</td></tr>
            <tr><td>$10^6$</td><td>mega</td><td>M</td></tr>
            <tr><td>$10^3$</td><td>kilo</td><td>k</td></tr>
            <tr><td>$10^{-2}$</td><td>centi</td><td>c</td></tr>
            <tr><td>$10^{-3}$</td><td>milli</td><td>m</td></tr>
            <tr><td>$10^{-6}$</td><td>micro</td><td>$\\mu$</td></tr>
            <tr><td>$10^{-9}$</td><td>nano</td><td>n</td></tr>
            <tr><td>$10^{-12}$</td><td>pico</td><td>p</td></tr>
        </table>

        <div style="font-weight: bold; margin-bottom: 8px; font-size: 12px; border-top: 1px solid var(--border-color); padding-top: 15px;">GEOMETRY AND TRIGONOMETRY</div>
        <table class="ref-table">
            <tr>
                <td style="width: 33.33%;">
                    <strong>Rectangle</strong><br>$A = bh$<br><br>
                    <strong>Triangle</strong><br>$A = \\frac{1}{2}bh$
                </td>
                <td style="width: 33.33%;">
                    <strong>Circle</strong><br>$A = \\pi r^2$<br>$C = 2\\pi r$<br>$s = r\\theta$
                </td>
                <td style="width: 33.33%;">
                    <strong>Rectangular solid</strong><br>$V = \\ell wh$<br><br>
                    <strong>Cylinder</strong><br>$V = \\pi r^2 \\ell$<br>$S = 2\\pi r \\ell + 2\\pi r^2$
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <strong>Sphere</strong><br>$V = \\frac{4}{3}\\pi r^3$<br>$S = 4\\pi r^2$
                </td>
                <td>
                    <strong>Right triangle</strong><br>
                    $c^2 = a^2 + b^2$<br>
                    $\\sin\\theta = \\frac{a}{c}$<br>
                    $\\cos\\theta = \\frac{b}{c}$<br>
                    $\\tan\\theta = \\frac{a}{b}$
                </td>
            </tr>
        </table>

        <div style="font-weight: bold; margin-bottom: 8px; font-size: 12px;">VALUES OF TRIGONOMETRIC FUNCTIONS</div>
        <table class="ref-table" style="text-align: center;">
            <tr>
                <th>$\\theta$</th><th>$0^\\circ$</th><th>$30^\\circ$</th><th>$37^\\circ$</th><th>$45^\\circ$</th><th>$53^\\circ$</th><th>$60^\\circ$</th><th>$90^\\circ$</th>
            </tr>
            <tr>
                <td style="font-weight: bold;">$\\sin\\theta$</td><td>$0$</td><td>$1/2$</td><td>$3/5$</td><td>$\\sqrt{2}/2$</td><td>$4/5$</td><td>$\\sqrt{3}/2$</td><td>$1$</td>
            </tr>
            <tr>
                <td style="font-weight: bold;">$\\cos\\theta$</td><td>$1$</td><td>$\\sqrt{3}/2$</td><td>$4/5$</td><td>$\\sqrt{2}/2$</td><td>$3/5$</td><td>$1/2$</td><td>$0$</td>
            </tr>
            <tr>
                <td style="font-weight: bold;">$\\tan\\theta$</td><td>$0$</td><td>$\\sqrt{3}/3$</td><td>$3/4$</td><td>$1$</td><td>$4/3$</td><td>$\\sqrt{3}$</td><td>$\\infty$</td>
            </tr>
        </table>

        <div style="font-weight: bold; margin-bottom: 8px; font-size: 12px; border-top: 1px solid var(--border-color); padding-top: 15px;">EXAM CONVENTIONS</div>
        <div style="font-size: 12px; line-height: 1.6; color: var(--text-main); background: rgba(0,0,0,0.02); padding: 12px; border-radius: 4px; border: 1px solid var(--border-color);">
            • The frame of reference of any problem is assumed to be inertial unless otherwise stated.<br>
            • Air resistance is assumed to be negligible unless otherwise stated.<br>
            • Springs and strings are assumed to be ideal unless otherwise stated.<br>
            • Fluids are assumed to be ideal, and pipes are assumed to be completely filled by fluid, unless otherwise stated.
        </div>
    `,
    ap2: ``,
    mech: ``,
    em: ``
};
