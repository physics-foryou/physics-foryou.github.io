const dailyProblemPoolBatch2 = [
  {
    id: "AP001-Q0037",
    course: "AP Physics 1",
    unit: "Oscillations",
    difficulty: "Easy",
    question: "A simple pendulum has a specific period of oscillation T on Earth. If the mass of the hanging bob is doubled while the length of the string remains unchanged, what is the new period of the pendulum?",
    options: ["(1/2)T", "T", "sqrt(2)T", "2T"],
    correctAnswer: "B",
    explanation: "The period of a simple pendulum depends strictly on the length of the string and the acceleration due to gravity (T = 2*pi*sqrt(L/g)). The mass of the bob has no effect on the period, so it remains T."
  },
  {
    id: "AP001-Q0134",
    course: "AP Physics 1",
    unit: "Gravitation",
    difficulty: "Medium",
    question: "A satellite travels around a large planet in a stable circular orbit. If the mass of the planet were doubled while keeping the orbital radius exactly the same, how would the satellite's stable orbital speed change?",
    options: ["It would remain the same.", "It would increase by a factor of sqrt(2).", "It would double.", "It would quadruple."],
    correctAnswer: "B",
    explanation: "For a circular orbit, gravity provides the necessary centripetal force: G*M*m/R^2 = m*v^2/R, which simplifies to v = sqrt(G*M/R). This shows that orbital speed is directly proportional to the square root of the planet's mass (v proportional to sqrt(M)). Doubling the mass M increases the speed by a factor of sqrt(2)."
  },
  {
    id: "AP001-Q0192",
    course: "AP Physics 1",
    unit: "Energy and Momentum of Rotating Systems",
    difficulty: "Hard",
    question: "A uniform solid sphere of mass M and radius R starts from rest and rolls down a rough incline of height h without slipping. If its rotational inertia about its central axis is I = (2/5)M*R^2, what is the translational speed of the sphere's center of mass when it reaches the bottom of the incline?",
    options: ["sqrt(2gh)", "sqrt(10gh/7)", "sqrt(4gh/3)", "sqrt(5gh/3)"],
    correctAnswer: "B",
    explanation: "By conservation of mechanical energy, the initial gravitational potential energy converts into both translational and rotational kinetic energy at the bottom: M*g*h = 0.5*M*v^2 + 0.5*I*omega^2. For a rolling object without slipping, omega = v/R. Substituting I and omega: M*g*h = 0.5*M*v^2 + 0.5*(2/5)*M*R^2*(v/R)^2 = 0.5*M*v^2 + 0.1*M*v^2 = 0.6*M*v^2 = (3/5)*M*v^2. Solving for velocity yields v = sqrt(10gh/7)."
  },
  {
    id: "AP001-Q0062",
    course: "AP Physics 1",
    unit: "Force and Translational Dynamics",
    difficulty: "Medium",
    question: "A block of mass m is suspended at rest by two light strings attached to a horizontal ceiling. String 1 makes an angle of 30° with the ceiling, and String 2 makes an angle of 60° with the ceiling. Which string experiences a larger tension force, and how does the vertical sum of the tension components compare to the block's weight?",
    options: ["String 1 has a larger tension; the vertical sum equals mg.", "String 2 has a larger tension; the vertical sum equals mg.", "Both strings have equal tension; the vertical sum is greater than mg.", "String 2 has a larger tension; the vertical sum is less than mg."],
    correctAnswer: "B",
    explanation: "Because the block is at rest, it is in static equilibrium. Horizontally, the components must balance: T_1*cos(30°) = T_2*cos(60°). Since cos(30°) > cos(60°), String 2 must have a larger tension (T_2 > T_1) to compensate. Vertically, the upward components must perfectly balance the downward force of gravity, meaning their sum is exactly equal to the block's weight (mg)."
  },
  {
    id: "AP001-Q0158",
    course: "AP Physics 1",
    unit: "Force and Translational Dynamics",
    difficulty: "Hard",
    question: "A block of mass m is placed against the inner vertical wall of a hollow cylinder of radius R. The cylinder rotates about its central vertical axis with a constant angular velocity omega. If the coefficient of static friction between the block and the wall is mu_s, what is the minimum angular velocity omega required to prevent the block from sliding down the wall?",
    options: ["omega = sqrt(g / (mu_s * R))", "omega = sqrt(mu_s * g / R)", "omega = sqrt(g * R / mu_s)", "omega = g / sqrt(mu_s * R)"],
    correctAnswer: "A",
    explanation: "For the block not to slide, the upward static friction force must balance the downward gravitational force: F_f = m*g. The maximum static friction force is given by F_f = mu_s * F_N. Here, the normal force exerted by the wall provides the necessary centripetal force keeping the block moving in a circle: F_N = m*R*omega^2. Substituting this gives mu_s*(m*R*omega^2) = m*g. Canceling mass m and solving for omega yields omega = sqrt(g / (mu_s * R))."
  },
  {
    id: "AP001-Q0081",
    course: "AP Physics 1",
    unit: "Linear Momentum",
    difficulty: "Medium",
    question: "A 0.2-kg baseball moving horizontally at 30 m/s is struck by a bat, causing it to travel in the exact opposite direction at 40 m/s. If the bat remains in contact with the ball for a time interval of 0.01 seconds, what is the magnitude of the average force exerted on the ball by the bat?",
    options: ["200 N", "700 N", "1400 N", "2000 N"],
    correctAnswer: "C",
    explanation: "According to the impulse-momentum theorem, Impulse = Delta_p = F_avg * Delta_t. Defining the final direction as positive, the change in momentum is Delta_p = m*v_f - m*v_i = (0.2 kg)(40 m/s) - (0.2 kg)(-30 m/s) = 8 - (-6) = 14 kg*m/s. The average force is F_avg = Delta_p / Delta_t = 14 kg*m/s / 0.01 s = 1400 N."
  },
  {
    id: "AP001-Q0097",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Medium",
    question: "A uniform wooden plank of length L and mass M rests horizontally on two supports located at its ends. A heavy box of mass 2M is placed on the plank at a distance of (1/4)L from the left support. What is the magnitude of the upward vertical force exerted on the plank by the left support?",
    options: ["(1/2)Mg", "Mg", "2Mg", "(3/2)Mg"],
    correctAnswer: "C",
    explanation: "To find the upward force from the left support (F_L), set the pivot at the right support to set up a torque balance. The plank's own weight Mg acts at its center of mass (1/2)L from the right support, and the box's weight 2Mg acts at (3/4)L from the right support. The torque equation is: F_L * L = Mg * (L/2) + 2Mg * (3L/4). Dividing everything by L: F_L = 0.5*Mg + 1.5*Mg = 2Mg."
  },
  {
    id: "AP001-Q0083",
    course: "AP Physics 1",
    unit: "Linear Momentum",
    difficulty: "Medium",
    question: "A 3-kg block moving east at 6 m/s makes a head-on collision with a 5-kg block moving west at 2 m/s. If the two blocks stick completely together during the collision, what is the final velocity of the coupled blocks?",
    options: ["1 m/s, moving East", "1 m/s, moving West", "2 m/s, moving East", "4 m/s, moving East"],
    correctAnswer: "A",
    explanation: "Using conservation of linear momentum and defining East as the positive direction: p_i = m_1*v_1i + m_2*v_2i = (3 kg)(6 m/s) + (5 kg)(-2 m/s) = 18 - 10 = +8 kg*m/s. Since they stick together, p_f = (m_1 + m_2)*v_f = (3 + 5)*v_f = 8*v_f. Setting p_i = p_f gives 8 = 8*v_f, which yields v_f = +1 m/s. The positive sign indicates they travel East."
  },
  {
    id: "AP001-Q0094",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Medium",
    question: "A uniform rod of length L and mass M is pinned smoothly at one end to a vertical wall so that it can pivot freely. If the rod is held horizontally and released from rest, what is the initial angular acceleration of the rod at the instant of release? (The rotational inertia of a uniform rod pivoted at its end is I = (1/3)M*L^2)",
    options: ["g / L", "3g / 2L", "2g / 3L", "3g / L"],
    correctAnswer: "B",
    explanation: "The torque causing the rod to rotate is generated by the force of gravity acting exactly at the rod's center of mass, a distance of L/2 from the pivot: tau = M * g * (L/2). Using Newton's second law for rotation (tau = I * alpha): M*g*(L/2) = (1/3)*M*L^2 * alpha. Canceling M and one L gives g/2 = (1/3)*L*alpha. Solving for angular acceleration gives alpha = 3g / 2L."
  },
  {
    id: "AP001-Q0052",
    course: "AP Physics 1",
    unit: "Kinematics",
    difficulty: "Medium",
    question: "A toy cart moves along a straight track. Its velocity as a function of time is given by v(t) = 8 - 2t (in m/s). What is the total path distance traveled by the cart from t = 0 to t = 5 seconds?",
    options: ["15 m", "16 m", "17 m", "25 m"],
    correctAnswer: "C",
    explanation: "First, find when the cart momentarily stops to change directions: v(t) = 0 -> 8 - 2t = 0 -> t = 4 s. From t = 0 to 4 s, it moves forward: delta_x1 = v_0*t + 0.5*a*t^2 = (8)(4) + 0.5(-2)(4)^2 = 32 - 16 = 16 m. From t = 4 to 5 s (a 1-second interval), it moves backward from rest: delta_x2 = 0 + 0.5(-2)(1)^2 = -1 m. Total distance traveled is the sum of the absolute path lengths: 16 m + |-1 m| = 17 m."
  },
  {
    id: "AP001-Q0178",
    course: "AP Physics 1",
    unit: "Oscillations",
    difficulty: "Hard",
    question: "A block connected to an ideal horizontal spring undergoes simple harmonic motion with an amplitude A. At what displacement distance x from the equilibrium position is the linear speed of the block exactly equal to half of its maximum possible speed (0.5 * v_max)?",
    options: ["x = 0.5 * A", "x = (sqrt(3) / 2) * A", "x = (1 / sqrt(2)) * A", "x = 0.25 * A"],
    correctAnswer: "B",
    explanation: "Total mechanical energy is E = 0.5*k*A^2 = 0.5*m*v_max^2. At any generic position x, E = 0.5*k*x^2 + 0.5*m*v^2. We are given v = 0.5*v_max, so the kinetic energy becomes K = 0.5*m*(0.5*v_max)^2 = 0.25*(0.5*m*v_max^2) = 0.25*E. Therefore, potential energy must account for the remaining energy: U = 0.75*E -> 0.5*k*x^2 = 0.75*(0.5*k*A^2). Canceling constants yields x^2 = 0.75*A^2 = (3/4)*A^2. Taking the square root gives x = (sqrt(3)/2)*A."
  },
  {
    id: "AP001-Q0078",
    course: "AP Physics 1",
    unit: "Work, Energy, and Power",
    difficulty: "Medium",
    question: "A 2-kg block is pressed against a horizontal ideal spring, compressing it by a distance of 0.2 meters. When released from rest, the block is propelled along a rough horizontal floor where the coefficient of kinetic friction between the block and the floor is mu_k = 0.1. If the spring constant is k = 400 N/m and the block detaches from the spring at its natural relaxed length, how far will the block slide along the rough floor after detaching before coming to a stop? (Assume g = 10 m/s^2)",
    options: ["2.0 m", "4.0 m", "4.2 m", "3.8 m"],
    correctAnswer: "D",
    explanation: "The total initial energy stored in the spring is U_s = 0.5*k*x^2 = 0.5(400 N/m)(0.2 m)^2 = 200 * 0.04 = 8 Joules. As the block moves, friction performs negative work over the total distance d from the release point: W_f = -F_f * d = -mu_k*m*g*d. By the work-energy theorem, this work drains all mechanical energy: 8 J = mu_k*m*g*d -> 8 = (0.1)(2 kg)(10 m/s^2)*d -> 8 = 2*d -> d = 4 meters total from release. Since the spring compression accounted for 0.2 m of this motion, the sliding distance after detaching is 4.0 m - 0.2 m = 3.8 meters."
  },
  {
    id: "AP001-Q0030",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Easy",
    question: "A net torque of 12 N*m is applied to a spinning wheel that has a rotational inertia of 3 kg*m^2. What is the magnitude of the angular acceleration of the wheel?",
    options: ["0.25 rad/s^2", "4.00 rad/s^2", "9.00 rad/s^2", "36.00 rad/s^2"],
    correctAnswer: "B",
    explanation: "According to Newton's second law for rotation (tau_net = I * alpha), the angular acceleration is calculated by dividing the net torque by the rotational inertia: alpha = tau / I = 12 N*m / 3 kg*m^2 = 4 rad/s^2."
  },
  {
    id: "AP001-Q0128",
    course: "AP Physics 1",
    unit: "Gravitation",
    difficulty: "Medium",
    question: "A spacecraft orbits a planet of mass M in a stable circular orbit of radius R with an orbital speed v_0. If the spacecraft is moved to a new stable circular orbit with a radius of 4R, what will its new orbital speed be in terms of v_0?",
    options: ["(1/4)v_0", "(1/2)v_0", "2v_0", "4v_0"],
    correctAnswer: "B",
    explanation: "For a circular orbit, gravity provides the necessary centripetal acceleration: G*M*m/R^2 = m*v^2/R, which simplifies to v = sqrt(G*M/R). This reveals that orbital velocity is inversely proportional to the square root of the orbital radius (v proportional to 1/sqrt(R)). Quadrupling the radius to 4R reduces the speed by a factor of 1/sqrt(4) = 1/2, resulting in a new speed of (1/2)v_0."
  },
  {
    id: "AP001-Q0006",
    course: "AP Physics 1",
    unit: "Force and Translational Dynamics",
    difficulty: "Easy",
    question: "A 5-kg box rests on a perfectly smooth, frictionless horizontal floor. A constant horizontal force of 15 N is applied to the box. What is the magnitude of the acceleration of the box?",
    options: ["0.33 m/s^2", "3.0 m/s^2", "5.0 m/s^2", "75.0 m/s^2"],
    correctAnswer: "B",
    explanation: "According to Newton's second law (F_net = m * a), the acceleration is equal to the net force divided by the mass: a = F / m = 15 N / 5 kg = 3 m/s^2."
  },
  {
    id: "AP001-Q0070",
    course: "AP Physics 1",
    unit: "Work, Energy, and Power",
    difficulty: "Medium",
    question: "A 4-kg block is released from rest from the top of a rough ramp inclined at an angle of 30° above the horizontal. The block slides down the ramp, covering a total distance of 5 meters along the incline. If the final speed of the block at the bottom of the ramp is 5 m/s, how much mechanical energy was converted into internal thermal energy by friction? (Assume g = 10 m/s^2)",
    options: ["50 J", "100 J", "150 J", "200 J"],
    correctAnswer: "A",
    explanation: "The initial mechanical energy is entirely gravitational potential energy: U_g = m*g*h. The vertical height h is h = d * sin(theta) = 5 m * sin(30°) = 2.5 meters. Thus, U_g = (4 kg)(10 m/s^2)(2.5 m) = 100 Joules. The final mechanical energy is entirely kinetic energy: K = 0.5*m*v^2 = 0.5(4 kg)(5 m/s)^2 = 50 Joules. The thermal energy generated by friction is the loss in mechanical energy: E_thermal = E_initial - E_final = 100 J - 50 J = 50 Joules."
  },
  {
    id: "AP001-Q0040",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Easy",
    question: "A solid plastic toy floats statically on the surface of a lake. If the total weight of the toy is 12 N, what is the magnitude of the upward buoyant force exerted on the toy by the water?",
    options: ["Less than 12 N", "Exactly 12 N", "Greater than 12 N", "0 N"],
    correctAnswer: "B",
    explanation: "For any object that is floating statically at the surface, the net vertical force must be zero (F_net = 0). Therefore, the upward buoyant force must exactly balance the downward force of gravity (the object's weight), making it exactly 12 N."
  },
  {
    id: "AP001-Q0170",
    course: "AP Physics 1",
    unit: "Energy and Momentum of Rotating Systems",
    difficulty: "Hard",
    question: "A thin uniform hoop of mass M and radius R spins about its central symmetry axis with an initial angular speed omega_0. A second identical hoop, completely stationary and non-spinning, is dropped coaxially directly onto the first hoop. Because of friction between their surfaces, the two hoops eventually stick together and rotate with a shared final angular speed omega_f. What is the ratio of the final total rotational kinetic energy of the two-hoop system to its initial rotational kinetic energy?",
    options: ["1:4", "1:2", "1:1", "2:1"],
    correctAnswer: "B",
    explanation: "Because there are no external torques acting on the system along the axis of rotation, total angular momentum is strictly conserved: L_i = L_f -> I*omega_0 = (I + I)*omega_f -> I*omega_0 = 2I*omega_f -> omega_f = 0.5*omega_0. The initial rotational kinetic energy is K_i = 0.5*I*omega_0^2. The final rotational kinetic energy is K_f = 0.5*(2I)*omega_f^2 = I*(0.5*omega_0)^2 = 0.25*I*omega_0^2. Comparing the values shows K_f / K_i = 0.25 / 0.5 = 1/2."
  },
  {
    id: "AP001-Q0147",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Medium",
    question: "A solid stone is attached to a thin string and lowered deep into a bucket filled with water until it is fully submerged. The stone is then lowered further down so that its depth below the surface doubles, without touching the bottom or sides of the bucket. How do the upward buoyant force acting on the stone and the absolute fluid pressure experienced by the stone change as its depth is doubled?",
    options: ["Both the buoyant force and the absolute pressure double.", "The buoyant force remains constant; the absolute pressure increases.", "The buoyant force decreases; the absolute pressure remains constant.", "The buoyant force remains constant; the absolute pressure remains constant."],
    correctAnswer: "B",
    explanation: "The buoyant force depends entirely on fluid density, local gravity, and the volume of fluid displaced (F_b = rho * V * g). Because the stone is fully submerged and water is incompressible, its displaced volume remains constant, keeping the buoyant force constant. However, absolute pressure increases linearly with depth (P = P_0 + rho*g*h), so the pressure climbs as it sinks deeper."
  },
  {
    id: "AP001-Q0167",
    course: "AP Physics 1",
    unit: "Linear Momentum",
    difficulty: "Hard",
    question: "A ballistic block of mass 3m hangs at rest from a light, long vertical string. A small projectile of mass m traveling horizontally with an initial speed v_0 collides with the block. The projectile passes completely through the block, emerging out the opposite side with a final horizontal speed of (1/3)v_0. Immediately after the collision, what is the translational kinetic energy of the moving block?",
    options: ["(1/6)m*v_0^2", "2/27 * m*v_0^2", "(2/9)m*v_0^2", "(1/9)m*v_0^2"],
    correctAnswer: "B",
    explanation: "By conservation of linear momentum along the horizontal axis: m*v_0 = m*(1/3*v_0) + 3m*v_block -> m*v_0 - (1/3)*m*v_0 = 3m*v_block -> (2/3)*m*v_0 = 3m*v_block. Canceling m and dividing by 3 yields v_block = (2/9)v_0. The kinetic energy of the block is K_block = 0.5*(3m)*(v_block)^2 = 1.5*m*(2/9*v_0)^2 = 1.5*m*(4/81*v_0^2) = (6/81)m*v_0^2 = 2/27 * m*v_0^2."
  },
  {
    id: "AP001-Q0057",
    course: "AP Physics 1",
    unit: "Force and Translational Dynamics",
    difficulty: "Medium",
    question: "A crate of mass m is dragged across a rough horizontal floor by a rope pulling with a force F at an angle theta above the horizontal. The crate moves forward at a constant velocity. Which of the following expressions correctly represents the normal force exerted by the floor on the crate?",
    options: ["mg", "mg + F*sin(theta)", "mg - F*sin(theta)", "F*cos(theta)"],
    correctAnswer: "C",
    explanation: "Vertically, the crate is in equilibrium, so the upward forces must balance the downward forces: F_N + F*sin(theta) = mg. Isolating the normal force yields F_N = mg - F*sin(theta)."
  },
  {
    id: "AP001-Q0146",
    course: "AP Physics 1",
    unit: "Force and Translational Dynamics",
    difficulty: "Medium",
    question: "An Atwood machine consists of a 1-kg block (Block 1) and a 2-kg block (Block 2) connected by a light string over a frictionless, massless pulley. If the system is released from rest, what is the magnitude of the acceleration of the blocks? (Assume g = 10 m/s^2)",
    options: ["3.33 m/s^2", "5.00 m/s^2", "6.67 m/s^2", "10.00 m/s^2"],
    correctAnswer: "A",
    explanation: "The net external force causing acceleration is the difference in weights: F_net = m_2*g - m_1*g = (2 kg)(10 m/s^2) - (1 kg)(10 m/s^2) = 10 N. The total mass being accelerated is the sum of both blocks: m_total = m_1 + m_2 = 1 kg + 2 kg = 3 kg. Using Newton's second law: a = F_net / m_total = 10 N / 3 kg = 3.33 m/s^2."
  },
  {
    id: "AP001-Q0141",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Medium",
    question: "A submarine dives to a depth of 50 m below the surface of the ocean. If the density of seawater is approximately 1000 kg/m^3 and atmospheric pressure is 1.0 x 10^5 Pa, what is the absolute pressure experienced by the submarine hull? (Assume g = 10 m/s^2)",
    options: ["4.0 x 10^5 Pa", "5.0 x 10^5 Pa", "6.0 x 10^5 Pa", "7.5 x 10^5 Pa"],
    correctAnswer: "C",
    explanation: "Absolute pressure at a depth h is P_abs = P_atm + rho*g*h. Substituting the given values: P_abs = (1.0 x 10^5 Pa) + (1000 kg/m^3)(10 m/s^2)(50 m) = 1.0 x 10^5 Pa + 5.0 x 10^5 Pa = 6.0 x 10^5 Pa."
  },
  {
    id: "AP001-Q0120",
    course: "AP Physics 1",
    unit: "Kinematics",
    difficulty: "Medium",
    question: "A test vehicle accelerates from rest at a constant rate a for a time interval t. The driver then slams on the brakes, causing a constant deceleration rate of 2a until the car comes to a complete stop. What is the total distance traveled by the car during this entire multi-stage motion?",
    options: ["(1/2)at^2", "(3/4)at^2", "at^2", "(3/2)at^2"],
    correctAnswer: "B",
    explanation: "During the first stage, the distance covered is x_1 = 0.5*a*t^2, and the maximum speed reached is v = a*t. In the second stage, the vehicle slows from v = a*t to 0 with deceleration 2a. Using v_f^2 = v_i^2 - 2(2a)x_2 -> 0 = (a*t)^2 - 4*a*x_2, we find the braking distance is x_2 = (a^2*t^2) / (4a) = 0.25*a*t^2. Summing the two stages: x_total = 0.5*a*t^2 + 0.25*a*t^2 = 0.74*a*t^2 = (3/4)at^2."
  },
  {
    id: "AP001-Q0106",
    course: "AP Physics 1",
    unit: "Kinematics",
    difficulty: "Medium",
    question: "A small stone is thrown vertically upward from the ground with an initial speed v_0. Neglecting air resistance, what is the speed of the stone when it reaches exactly half of its maximum height?",
    options: ["(1/2)v_0", "(1 / sqrt(2))v_0", "sqrt(2)v_0", "(sqrt(3) / 2)v_0"],
    correctAnswer: "B",
    explanation: "Using the kinematic equation v_f^2 = v_0^2 + 2a*delta_y, at peak height (v_f = 0 and a = -g), the maximum height is y_max = v_0^2 / (2g). At half the maximum height (delta_y = y_max / 2 = v_0^2 / (4g)), we substitute this back into the kinematic formula: v^2 = v_0^2 - 2g*(v_0^2 / (4g)) = v_0^2 - 0.5*v_0^2 = 0.5*v_0^2. Taking the square root gives v = v_0 / sqrt(2)."
  },
  {
    id: "AP001-Q0072",
    course: "AP Physics 1",
    unit: "Linear Momentum",
    difficulty: "Medium",
    question: "A block of mass M moving at speed v_0 undergoes a completely inelastic collision with a stationary block of mass 3M. What fraction of the initial kinetic energy is lost during the collision?",
    options: ["1/4", "1/2", "2/3", "3/4"],
    correctAnswer: "D",
    explanation: "By conservation of momentum, M*v_0 = (M + 3M)*v_f, which simplifies to v_f = (1/4)*v_0. The initial kinetic energy is K_i = 0.5*M*v_0^2. The final kinetic energy is K_f = 0.5*(4M)*(v_f)^2 = 0.5*(4M)*((1/4)*v_0)^2 = (1/4)*(0.5*M*v_0^2) = (1/4)*K_i. Since the final kinetic energy is 1/4 of the initial, the fraction lost during the collision is 1 - 1/4 = 3/4."
  },
  {
    id: "AP001-Q0103",
    course: "AP Physics 1",
    unit: "Gravitation",
    difficulty: "Medium",
    question: "Two identical moons orbit two different planets. Moon 1 orbits a planet of mass M at a radius R. Moon 2 orbits a planet of mass 2M at a radius 2R. How does the gravitational force on Moon 2 compare to the gravitational force on Moon 1?",
    options: ["F_2 = (1/4)F_1", "F_2 = (1/2)F_1", "F_2 = F_1", "F_2 = 2F_1"],
    correctAnswer: "B",
    explanation: "Using Newton's law of universal gravitation (F = G*M*m / r^2), the force on Moon 1 is F_1 = G*M*m / R^2. The force on Moon 2 is F_2 = G*(2M)*m / (2R)^2 = 2*G*M*m / (4*R^2) = (1/2)*(G*M*m / R^2) = (1/2)F_1."
  },
  {
    id: "AP001-Q0065",
    course: "AP Physics 1",
    unit: "Work, Energy, and Power",
    difficulty: "Medium",
    question: "A lab particle moves along the x-axis under the influence of a net force directed along the axis given by the function F(x) = kx, where k is a positive constant. What is the total work done by this force on the particle as it moves from an initial position x = x_0 to a final position x = 2x_0?",
    options: ["(1/2)k*x_0^2", "k*x_0^2", "(3/2)k*x_0^2", "2k*x_0^2"],
    correctAnswer: "C",
    explanation: "The work done by a variable force that depends linearly on position can be found using the potential energy relation (W = 0.5*k*x_f^2 - 0.5*k*x_i^2). Substituting the boundaries yields: W = 0.5*k*(2x_0)^2 - 0.5*k*x_0^2 = 0.5*k*(4x_0^2) - 0.5*k*x_0^2 = 2*k*x_0^2 - 0.5*k*x_0^2 = (3/2)k*x_0^2."
  },
  {
    id: "AP001-Q0124",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Medium",
    question: "A uniform thin rod of mass M and length L is pivoted at one end and held horizontally. When released from rest, what is the initial tangential linear acceleration of the far tip of the rod? (The rotational inertia of the rod is I = (1/3)M*L^2)",
    options: ["(1/2)g", "g", "(3/2)g", "2g"],
    correctAnswer: "C",
    explanation: "The torque about the pivot is caused by the weight acting at the rod's center of mass: tau = M*g*(L/2). Using tau = I * alpha: M*g*(L/2) = ((1/3)*M*L^2) * alpha -> alpha = 3g / 2L. The tangential linear acceleration of the far tip is defined as a = L * alpha = L * (3g / 2L) = (3/2)g."
  },
  {
    id: "AP001-Q0058",
    course: "AP Physics 1",
    unit: "Gravitation",
    difficulty: "Medium",
    question: "A satellite is in a stable circular orbit around a planet of mass M at an altitude exactly equal to the planet's radius R. What is the orbital speed of the satellite?",
    options: ["sqrt(GM / R)", "sqrt(GM / 2R)", "sqrt(2GM / R)", "GM / 2R"],
    correctAnswer: "B",
    explanation: "The orbital radius r is measured from the center of the planet. Because the altitude is R, the total orbital radius is r = R + R = 2R. Setting the gravitational force equal to the centripetal force: G*M*m / (2R)^2 = m*v^2 / 2R. Canceling satellite mass m and one factor of 2R yields v^2 = G*M / 2R, which means v = sqrt(GM / 2R)."
  },
  {
    id: "AP001-Q0204",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Easy",
    question: "A crown weighing 50 N in air is lowered into a tub of water. When fully submerged, a scale reads its apparent weight to be 45 N. What is the buoyant force acting on the submerged crown?",
    options: ["5 N", "45 N", "50 N", "95 N"],
    correctAnswer: "A",
    explanation: "The apparent weight of a submerged object is its actual weight minus the upward buoyant force: W_apparent = W_actual - F_b. Rearranging this equation to solve for the buoyant force gives: F_b = W_actual - W_apparent = 50 N - 45 N = 5 N."
  },
  {
    id: "AP001-Q0177",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Medium",
    question: "An ideal fluid flows through a horizontal pipe that expands to double its initial cross-sectional area. How do the fluid velocity and pressure change as it moves into the wider section of the pipe?",
    options: ["Velocity increases; pressure increases.", "Velocity decreases; pressure increases.", "Velocity increases; pressure decreases.", "Velocity decreases; pressure decreases."],
    correctAnswer: "B",
    explanation: "According to the continuity equation (A_1 * v_1 = A_2 * v_2), when the cross-sectional area increases, the fluid speed must decrease. According to Bernoulli's equation for a horizontal pipe (P_1 + 0.5*rho*v_1^2 = P_2 + 0.5*rho*v_2^2), a decrease in fluid velocity directly results in an increase in fluid pressure."
  },
  {
    id: "AP001-Q0196",
    course: "AP Physics 1",
    unit: "Oscillations",
    difficulty: "Medium",
    question: "A block attached to a horizontal ideal spring oscillates in simple harmonic motion. If the amplitude of the oscillation is doubled, how does the total mechanical energy of the spring-mass system change?",
    options: ["It remains the same.", "It doubles.", "It quadruples.", "It increases by a factor of 8."],
    correctAnswer: "C",
    explanation: "The total mechanical energy of a simple harmonic oscillator can be evaluated at its maximum displacement extreme, where it is entirely spring potential energy: E = 0.5 * k * A^2. Because energy depends on the square of the amplitude (A^2), doubling the amplitude (2A) results in (2)^2 = 4 times the total mechanical energy."
  },
  {
    id: "AP001-Q0181",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Hard",
    question: "An object is floating statically at the boundary interface between oil and water, with exactly half of its volume submerged in oil and half submerged in water. If the density of oil is 800 kg/m^3 and the density of water is 1000 kg/m^3, what is the average density of the floating object?",
    options: ["400 kg/m^3", "800 kg/m^3", "900 kg/m^3", "1800 kg/m^3"],
    correctAnswer: "C",
    explanation: "For a statically floating object, the downward weight equals the total upward buoyant force: rho_obj * V_total * g = rho_oil * V_oil * g + rho_water * V_water * g. Since exactly half of the volume is in each fluid (V_oil = 0.5 * V_total and V_water = 0.5 * V_total), we can cancel out V_total and g: rho_obj = 0.5 * rho_oil + 0.5 * rho_water = 0.5*(800) + 0.5*(1000) = 400 + 500 = 900 kg/m^3."
  },
  {
    id: "AP001-Q0098",
    course: "AP Physics 1",
    unit: "Gravitation",
    difficulty: "Medium",
    question: "A planet moves around a star in a highly elliptical orbit. As the planet travels along its path from its closest approach to the star (perihelion) to its furthest distance from the star (aphelion), how do its linear speed and gravitational potential energy change?",
    options: ["Linear speed increases; potential energy increases.", "Linear speed decreases; potential energy increases.", "Linear speed increases; potential energy decreases.", "Linear speed decreases; potential energy decreases."],
    correctAnswer: "B",
    explanation: "As the planet moves away from the star toward aphelion, gravity pulls backward against its motion, causing it to slow down (linear speed decreases). Simultaneously, because it is moving further away from the gravitational center, the system's gravitational potential energy increases."
  },
  {
    id: "AP001-Q0152",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Hard",
    question: "A point particle of mass m moves at a constant linear speed v along a horizontal line that passes a perpendicular distance d away from an origin. What is the magnitude of the angular momentum of the particle about this origin?",
    options: ["mvd", "(1/2)mvd", "mv^2d", "mv / d"],
    correctAnswer: "A",
    explanation: "Angular momentum of a point particle about an origin is defined as L = m * v * r_perp, where r_perp is the perpendicular distance from the origin to the straight line of the particle's velocity vector. Regardless of the particle's changing position along that line, this closest perpendicular distance remains constantly equal to d. Therefore, the magnitude of angular momentum is always mvd."
  },
  {
    id: "AP001-Q018",
    course: "AP Physics 1",
    unit: "Work, Energy, and Power",
    difficulty: "Easy",
    question: "An ideal spring with a spring constant of k = 200 N/m is compressed by a distance of 0.1 meters from its relaxed equilibrium position. How much elastic potential energy is stored inside the compressed spring?",
    options: ["1 J", "2 J", "10 J", "20 J"],
    correctAnswer: "A",
    explanation: "The elastic potential energy stored in a spring is calculated using U_s = 0.5 * k * x^2. Substituting the values gives U_s = 0.5 * (200 N/m) * (0.1 m)^2 = 100 * 0.01 = 1 Joule."
  },
  {
    id: "AP001-Q0191",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Hard",
    question: "A uniform disk of mass M and radius R is free to rotate about a fixed frictionless horizontal axle passing through its central axis. A light string wrapped around the outer rim of the disk is connected to a hanging block of mass m. When the system is released from rest, the block accelerates downwards. What is the magnitude of the linear acceleration of the hanging mass? (The rotational inertia of a uniform disk is I = (1/2)M*R^2)",
    options: ["mg / (m + M)", "mg / (m + 2M)", "2mg / (2m + M)", "2mg / (m + 2M)"],
    correctAnswer: "C",
    explanation: "Writing Newton's second law for the block yields m*g - T = m*a. Writing Newton's second law for the rotating disk gives tau = T * R = I * alpha. Since alpha = a / R and I = 0.5 * M * R^2, we get T * R = (0.5 * M * R^2) * (a / R) -> T = 0.5 * M * a. Substituting this back into the block's equation: m*g - 0.5*M*a = m*a -> m*g = (m + 0.5*M)*a. Multiplying both sides by 2 gives 2*m*g = (2m + M)*a, which yields a = 2mg / (2m + M)."
  },
  {
    id: "AP001-Q0053",
    course: "AP Physics 1",
    unit: "Kinematics",
    difficulty: "Medium",
    question: "A high-speed train car moving along a straight track accelerates at a constant rate from an initial velocity v_0 to a final velocity of 3v_0 while covering a displacement distance delta_x. What is the velocity of the train car when it has traveled exactly half of this displacement distance (0.5 * delta_x)?",
    options: ["v = 2v_0", "v = sqrt(5) * v_0", "v = sqrt(3) * v_0", "v = 2.5v_0"],
    correctAnswer: "B",
    explanation: "Using v_f^2 = v_i^2 + 2*a*delta_x, we get (3v_0)^2 = v_0^2 + 2*a*delta_x -> 9v_0^2 = v_0^2 + 2*a*delta_x -> 8v_0^2 = 2*a*delta_x -> 2*a = 8v_0^2 / delta_x. At half the distance, the velocity equation is v^2 = v_0^2 + 2*a*(0.5 * delta_x) = v_0^2 + a*delta_x. Since 2*a*delta_x = 8v_0^2, then a*delta_x = 4v_0^2. Substituting this in gives v^2 = v_0^2 + 4v_0^2 = 5v_0^2. Taking the root yields v = sqrt(5) * v_0."
  },
  {
    id: "AP001-Q0157",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Medium",
    question: "An ideal incompressible fluid flows through a non-uniform horizontal pipe. At Point A, the pipe radius is R and the fluid pressure is P_A. At Point B, the pipe narrows to a radius of (1/2)R. If the fluid speed at Point A is v, what is the fluid pressure at Point B?",
    options: ["P_A - (15/2)*rho*v^2", "P_A - (3/2)*rho*v^2", "P_A - 15*rho*v^2", "P_A - 8*rho*v^2"],
    correctAnswer: "A",
    explanation: "By the continuity equation (A_A * v_A = A_B * v_B), since area depends on the square of the radius (pi * R^2), reducing the radius by half decreases the cross-sectional area to 1/4 of its initial value, forcing fluid velocity at B to quadruple (v_B = 4v). Next, apply Bernoulli's equation across the horizontal track: P_A + 0.5*rho*v^2 = P_B + 0.5*rho*v_B^2. Substituting v_B = 4v yields P_A + 0.5*rho*v^2 = P_B + 0.5*rho*(16v^2) = P_B + 8*rho*v^2. Solving for P_B results in P_B = P_A - (15/2)*rho*v^2."
  },
  {
    id: "AP001-Q0060",
    course: "AP Physics 1",
    unit: "Force and Translational Dynamics",
    difficulty: "Medium",
    question: "A heavy box rests on a rough warehouse floor with a static friction coefficient mu_s. If a horizontal force is applied that is exactly half of the maximum static friction force, what is the magnitude of the friction force acting on the box?",
    options: ["Zero", "Exactly half of the maximum static friction force", "Equal to the maximum static friction force", "Equal to the kinetic friction force"],
    correctAnswer: "B",
    explanation: "Since the applied horizontal force is less than the maximum static friction force (0.5 * f_s,max < f_s,max), the box remains completely stationary and does not move. For an object at rest, the static friction force perfectly balances the applied force. Therefore, the static friction is exactly equal to the applied force, which is half of the maximum static friction."
  },
  {
    id: "AP001-Q0172",
    course: "AP Physics 1",
    unit: "Oscillations",
    difficulty: "Hard",
    question: "A block-spring system undergoes simple harmonic motion on a frictionless horizontal surface with an amplitude A. At what displacement x from the equilibrium position is the kinetic energy of the block exactly equal to the elastic potential energy of the spring?",
    options: ["x = A / 2", "x = A / sqrt(2)", "x = A / sqrt(3)", "x = A / 4"],
    correctAnswer: "B",
    explanation: "Total mechanical energy is E = 0.5 * k * A^2. We are given that Kinetic Energy (K) equals Potential Energy (U), so E = K + U = 2U. Substituting the potential energy formula: 0.5 * k * A^2 = 2 * (0.5 * k * x^2). Canceling constants gives A^2 = 2x^2, which simplifies to x^2 = A^2 / 2. Taking the square root gives x = A / sqrt(2)."
  },
  {
    id: "AP001-Q0118",
    course: "AP Physics 1",
    unit: "Force and Translational Dynamics",
    difficulty: "Medium",
    question: "A particle of mass m is attached to a string and moves in a vertical circle of radius R. What is the minimum speed the particle must have at the top of the circle to maintain a complete circular path without slackening the string?",
    options: ["sqrt(0.5 * g * R)", "sqrt(g * R)", "sqrt(2 * g * R)", "sqrt(5 * g * R)"],
    correctAnswer: "B",
    explanation: "At the absolute top of the vertical path, both gravity and the string tension point downward toward the center of the circle: T + m*g = m*v^2 / R. To find the critical minimum speed, we set the string tension to zero (T = 0). This leaves m*g = m*v^2 / R, which simplifies directly to v = sqrt(g * R)."
  },
  {
    id: "AP001-Q0108",
    course: "AP Physics 1",
    unit: "Gravitation",
    difficulty: "Medium",
    question: "A planet of mass M and radius R has a uniform density. If a small research satellite is placed into a circular orbit at an altitude of 2R above the planet's surface, what is the magnitude of the gravitational acceleration experienced by the satellite?",
    options: ["g", "g / 3", "g / 4", "g / 9"],
    correctAnswer: "D",
    explanation: "The acceleration due to gravity is given by a_g = G*M / r^2, where r is the total distance from the center of the planet. Since the altitude above the surface is 2R, the total orbital radius is r = R + 2R = 3R. Substituting this in gives a_g = G*M / (3R)^2 = G*M / 9R^2. Since surface gravity is g = G*M / R^2, the acceleration is g / 9."
  },
  {
    id: "AP001-Q0068",
    course: "AP Physics 1",
    unit: "Force and Translational Dynamics",
    difficulty: "Medium",
    question: "An Atwood machine consists of mass m_1 = 3m and mass m_2 = m connected by a light string over an ideal pulley. What is the magnitude of the acceleration of the system when released from rest?",
    options: ["(1/4)g", "(1/2)g", "(2/3)g", "g"],
    correctAnswer: "B",
    explanation: "Using Newton's second law for an Atwood machine, the acceleration of the blocks is given by the formula a = (m_1 - m_2)*g / (m_1 + m_2). Substituting the given values: a = (3m - m)*g / (3m + m) = 2m*g / 4m = (1/2)g."
  },
  {
    id: "AP001-Q0133",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Medium",
    question: "Two blocks of masses m_1 and m_2 (m_2 > m_1) are connected by a string hung over a real pulley that has a non-zero rotational inertia I and radius R. If the string does not slip on the pulley, what is the acceleration of the system?",
    options: ["(m_2 - m_1)g / (m_1 + m_2 + I/R^2)", "(m_2 - m_1)g / (m_1 + m_2)", "(m_2 - m_1)g / (I/R^2)", "(m_2 + m_1)g / (m_1 + m_2 + I/R^2)"],
    correctAnswer: "A",
    explanation: "Write Newton's second law equations for both hanging masses and the rotating pulley: m_2*g - T_2 = m_2*a, T_1 - m_1*g = m_1*a, and (T_2 - T_1)*R = I*alpha = I*(a/R) -> T_2 - T_1 = (I / R^2)*a. Adding these equations together cancels out the internal string tensions T_1 and T_2, yielding: (m_2 - m_1)g = (m_1 + m_2 + I/R^2)a. Solving for linear acceleration provides option A."
  },
  {
    id: "AP001-Q0013",
    course: "AP Physics 1",
    unit: "Force and Translational Dynamics",
    difficulty: "Easy",
    question: "A small bird lands on a thick tree branch. According to Newton's third law, if the gravitational force of the Earth pulls down on the bird, what is the equal and opposite reaction force?",
    options: ["The upward normal force exerted by the branch on the bird.", "The downward force exerted by the bird's feet on the branch.", "The upward gravitational force exerted by the bird on the Earth.", "The air resistance pushing up against the bird's feathers."],
    correctAnswer: "C",
    explanation: "Newton's third law force pairs always involve the exact same two objects interacting. If the action force is 'Earth pulling downward on the bird,' the reaction force must be 'bird pulling upward on the Earth' with an identical magnitude of force."
  },
  {
    id: "AP001-Q0115",
    course: "AP Physics 1",
    unit: "Work, Energy, and Power",
    difficulty: "Medium",
    question: "A block of mass m is released from rest from a height h above an uncompressed vertical spring of spring constant k. What is the maximum compression x of the spring?",
    options: ["(mg/k) * (1 + sqrt(1 + 2kh/mg))", "(mg/k) * (1 - sqrt(1 + 2kh/mg))", "sqrt(2mgh / k)", "2mgh / k"],
    correctAnswer: "A",
    explanation: "Choose the point of maximum spring compression as the gravitational potential energy reference origin (U_g = 0). The initial energy is entirely gravitational: E_i = m*g*(h + x). The final energy at maximum compression is entirely elastic potential: E_f = 0.5 * k * x^2. Equating them gives 0.5*k*x^2 - m*g*x - m*g*h = 0. Solving this quadratic equation for x using the quadratic formula yields the positive root shown in option A."
  },
  {
    id: "AP001-Q0156",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Hard",
    question: "A solid uniform sphere of mass M and radius R rolls horizontally without slipping at a linear speed v. What is its total mechanical kinetic energy? (I = (2/5)M*R^2)",
    options: ["(7/10)Mv^2", "(1/2)Mv^2", "(2/5)Mv^2", "(1/5)Mv^2"],
    correctAnswer: "A",
    explanation: "The total kinetic energy of a rolling body is the sum of its translational and rotational kinetic energies: K = 0.5*M*v^2 + 0.5*I*omega^2. Since it rolls without slipping, we substitute omega = v/R and the given inertia I = (2/5)M*R^2: K = 0.5*M*v^2 + 0.5*((2/5)*M*R^2)*(v/R)^2 = 0.5*M*v^2 + 0.2*M*v^2 = 0.7*M*v^2 = (7/10)Mv^2."
  },
  {
    id: "AP001-Q0096",
    course: "AP Physics 1",
    unit: "Gravitation",
    difficulty: "Medium",
    question: "Planet X orbits a star in a circular path of radius R with an orbital period $T$. Planet Y orbits the same star in a circular path of radius 4R. What is the orbital period of Planet Y?",
    options: ["2T", "4T", "8T", "16T"],
    correctAnswer: "C",
    explanation: "Kepler’s third law states that the square of the orbital period is proportional to the cube of the orbital radius (T^2 proportional to R^3), which means T proportional to R^(3/2). Since Planet Y's radius is 4 times that of Planet X, its period scales by a factor of 4^(3/2) = (sqrt(4))^3 = 2^3 = 8. Thus, the period of Planet Y is 8T."
  },
  {
    id: "AP001-Q0086",
    course: "AP Physics 1",
    unit: "Work, Energy, and Power",
    difficulty: "Medium",
    question: "A block of mass m is released from rest at the top of a frictionless ramp of height h. At the bottom of the ramp, it slides across a horizontal surface and compresses an ideal spring of constant k by a maximum distance x. If the experiment is repeated with a block of mass 2m released from the exact same initial height h, what will the new maximum compression of the spring be?",
    options: ["x", "sqrt(2)x", "2x", "4x"],
    correctAnswer: "B",
    explanation: "By conservation of energy, the initial gravitational potential energy at the top of the ramp is completely converted into elastic potential energy at maximum spring compression: mgh = 0.5 * k * x^2. This means that x^2 is proportional to m, or x is proportional to sqrt(m). Doubling the mass to 2m increases the maximum compression by a factor of sqrt(2)."
  },
  {
    id: "AP001-Q0084",
    course: "AP Physics 1",
    unit: "Kinematics",
    difficulty: "Medium",
    question: "A small motorized cart travels along a linear track. At t = 0 s, its initial velocity is v_0 = 8 m/s, and it undergoes a constant acceleration of a = -2 m/s^2. What is the total distance traveled by the cart from t = 0 s to t = 5 s?",
    options: ["15 m", "16 m", "17 m", "25 m"],
    correctAnswer: "C",
    explanation: "First, find when the cart momentarily stops to reverse direction: v_f = v_0 + at -> 0 = 8 - 2t -> t = 4 s. From t = 0 to t = 4 s, it moves forward: delta_x_1 = v_0*t + 0.5*a*t^2 = (8)(4) + 0.5*(-2)(4)^2 = 32 - 16 = 16 m. From t = 4 to t = 5 s (a 1-second interval), it moves backward from rest: delta_x_2 = 0 + 0.5*(-2)(1)^2 = -1 m. The magnitude of this backward path is 1 m. Therefore, the total path distance traveled is 16 m + 1 m = 17 m."
  },
  {
    id: "AP001-Q0202",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Hard",
    question: "A hot air balloon consists of an open envelope of total volume V filled with heated air of density rho_hot. The ambient air outside surrounding the balloon has a cooler density rho_air. What is the magnitude of the net upward lifting force acting on the balloon structure, ignoring the mass of the fabric envelope and basket?",
    options: ["(rho_air - rho_hot) * V * g", "(rho_air + rho_hot) * V * g", "rho_air * V * g", "(rho_hot - rho_air) * V * g"],
    correctAnswer: "A",
    explanation: "The upward buoyant force is equal to the weight of the displaced outside ambient air: F_b = rho_air * V * g. The downward weight of the heated gas trapped inside the envelope is W_hot = rho_hot * V * g. For liftoff and net acceleration upward, the net lifting force is the difference between these values: F_net = F_b - W_hot = (rho_air - rho_hot) * V * g."
  },
  {
    id: "AP001-Q0076",
    course: "AP Physics 1",
    unit: "Linear Momentum",
    difficulty: "Hard",
    question: "An object of mass m moving with velocity v undergoes a collision. A time-dependent net force F(t) = 100t - 200t^2 (in SI units) acts on the object during a short time interval from t = 0 to t = 0.5 seconds. If the mass of the object is 0.5 kg, what is the change in velocity of the object due to this impulse?",
    options: ["4.17 m/s", "8.33 m/s", "12.50 m/s", "16.67 m/s"],
    correctAnswer: "B",
    explanation: "The impulse J delivered to the object is equal to the definite integral of the force function over the time interval: J = integral from 0 to 0.5 of (100t - 200t^2) dt = [50t^2 - (200/3)t^3] from 0 to 0.5 = 50(0.25) - (200/3)(0.125) = 12.5 - 8.333 = 4.167 N*s. Since impulse also equals momentum change (J = m * delta_v), we set 4.167 N*s = 0.5 kg * delta_v. Solving for delta_v yields delta_v = 8.33 m/s."
  },
  {
    id: "AP001-Q0028",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Easy",
    question: "A lightweight uniform bar is pivoted at its center. A 2-kg block is placed on the bar at a distance of 1.0 meter to the left of the pivot. Where should a 1-kg block be placed on the bar to keep the system in static rotational equilibrium?",
    options: ["1.0 meter to the right of the pivot", "1.5 meters to the right of the pivot", "2.0 meters to the right of the pivot", "4.0 meters to the right of the pivot"],
    correctAnswer: "C",
    explanation: "For rotational equilibrium, the counterclockwise torque must equal the clockwise torque: tau_1 = tau_2 -> m_1*g*r_1 = m_2*g*r_2. Canceling g leaves m_1 * r_1 = m_2 * r_2. Substituting the values gives: (2 kg) * (1 m) = (1 kg) * r_2, which simplifies directly to r_2 = 2.0 meters to the right."
  },
  {
    id: "AP001-Q0200",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Medium",
    question: "A small submarine operates at a depth of 3 meters below the surface of a fresh-water lake. If the density of water is 1000 kg/m^3, what is the gauge pressure experienced by the outer hull of the submarine?",
    options: ["10,000 Pa", "30,000 Pa", "100,000 Pa", "300,000 Pa"],
    correctAnswer: "B",
    explanation: "Gauge pressure at a given depth in a fluid is calculated using P_gauge = rho * g * h. Substituting the given values: P_gauge = (1000 kg/m^3) * (10 m/s^2) * (3 m) = 30,000 Pa."
  },
  {
    id: "AP001-Q0129",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Hard",
    question: "A thin uniform square plate of mass M and side length L lies in the xy-plane. What is the rotational inertia of this square plate about a fixed axis passing perpendicularly through its center of mass?",
    options: ["(1/12)M*L^2", "(1/6)M*L^2", "(1/3)M*L^2", "(2/3)M*L^2"],
    correctAnswer: "B",
    explanation: "According to the perpendicular axis theorem for planar objects, the moment of inertia about a perpendicular axis through the plate (I_z) is equal to the sum of the moments of inertia about two mutually perpendicular in-plane axes (I_x + I_y). For a thin plate along one dimension, I_x = (1/12)M*L^2 and I_y = (1/12)M*L^2. Adding these together yields I_z = (1/12)M*L^2 + (1/12)M*L^2 = (2/12)M*L^2 = (1/6)M*L^2."
  },
  {
    id: "AP001-Q0126",
    course: "AP Physics 1",
    unit: "Energy and Momentum of Rotating Systems",
    difficulty: "Medium",
    question: "A fly-wheel with a rotational inertia I is spinning at an initial angular speed omega_0. A constant friction torque acts on its axle, bringing the fly-wheel to a complete stop over a displacement of theta radians. What is the magnitude of the friction torque?",
    options: ["I * omega_0 / theta", "I * omega_0^2 / theta", "I * omega_0^2 / (2 * theta)", "2 * I * omega_0^2 / theta"],
    correctAnswer: "C",
    explanation: "Using the rotational work-energy theorem, the work done by the friction torque must equal the change in rotational kinetic energy: W = delta_K_rot -> tau * theta = 0 - 0.5 * I * omega_0^2. Taking the absolute magnitude of torque to isolate the value gives tau = I * omega_0^2 / (2 * theta)."
  },
  {
    id: "AP001-Q0054",
    course: "AP Physics 1",
    unit: "Kinematics",
    difficulty: "Medium",
    question: "A standard sports car accelerates uniformly along a straight highway from an initial velocity v_0 to a final velocity v_f while covering a distance D. What is the linear acceleration of the sports car during this test?",
    options: ["(v_f - v_0) / D", "(v_f^2 - v_0^2) / D", "(v_f^2 - v_0^2) / (2D)", "(v_f + v_0)^2 / (2D)"],
    correctAnswer: "C",
    explanation: "Using the standard timeless kinematic equation, v_f^2 = v_0^2 + 2*a*delta_x. Substituting the distance parameter D for displacement delta_x gives: v_f^2 = v_0^2 + 2*a*D. Rearranging this equation to isolate the linear acceleration variable yields: a = (v_f^2 - v_0^2) / (2D)."
  },
  {
    id: "AP001-Q0074",
    course: "AP Physics 1",
    unit: "Linear Momentum",
    difficulty: "Medium",
    question: "A net force F_x(t) acts on an initially stationary 3-kg block along a linear track. The force increases linearly from 0 N at t = 0 s to a maximum of 12 N at t = 4 s, and then drops instantly back to zero. What is the speed of the block at t = 4 s?",
    options: ["4 m/s", "8 m/s", "12 m/s", "16 m/s"],
    correctAnswer: "A",
    explanation: "The impulse delivered to the block is equal to the geometric area under the force-time graph. Since the force increases linearly from 0 to 12 N over 4 seconds, the area forms a right triangle: Area = 0.5 * base * height = 0.5 * (4 s) * (12 N) = 24 N*s. By the impulse-momentum theorem (J = m * delta_v), 24 N*s = (3 kg) * (v_f - 0). Solving for the final velocity gives v_f = 24 / 3 = 8 m/s."
  },
  {
    id: "AP001-Q0082",
    course: "AP Physics 1",
    unit: "Work, Energy, and Power",
    difficulty: "Hard",
    question: "A student of mass m stands at rest on a frictionless skateboard of mass M. The student suddenly runs forward off the skateboard, jumping with a horizontal speed of v relative to the ground. How much chemical energy was transformed into total mechanical kinetic energy during this process?",
    options: ["0.5 * m * v^2", "0.5 * M * v^2", "0.5 * m * v^2 * (1 + m/M)", "0.5 * m * v^2 * (1 - m/M)"],
    correctAnswer: "C",
    explanation: "By conservation of linear momentum, the total initial momentum of the system is zero. Thus, m*v + M*v_board = 0 -> v_board = -(m/M)*v. The total mechanical kinetic energy generated is the sum of both parts: K = 0.5*m*v^2 + 0.5*M*(v_board)^2 = 0.5*m*v^2 + 0.5*M*(-(m/M)*v)^2 = 0.5*m*v^2 + 0.5*M*(m^2 / M^2)*v^2 = 0.5*m*v^2 + 0.5*(m^2 / M)*v^2. Factoring out 0.5*m*v^2 yields 0.5 * m * v^2 * (1 + m/M)."
  },
  {
    id: "AP001-Q0176",
    course: "AP Physics 1",
    unit: "Work, Energy, and Power",
    difficulty: "Medium",
    question: "A block of mass m is held compressed against a horizontal spring of constant k by a distance x. When released on a rough track, it travels a total distance d along the surface before coming to rest. If the coefficient of kinetic friction is mu_k and the track is tilted at an upward angle theta, which equation correctly describes the conservation of energy for this motion?",
    options: ["0.5 * k * x^2 = m*g*d*sin(theta) + mu_k*m*g*d*cos(theta)", "0.5 * k * x^2 = m*g*d*cos(theta) + mu_k*m*g*d*sin(theta)", "0.5 * k * x^2 + mu_k*m*g*d*cos(theta) = m*g*d*sin(theta)", "0.5 * k * x^2 = m*g*d*sin(theta) - mu_k*m*g*d*cos(theta)"],
    correctAnswer: "A",
    explanation: "The initial energy stored in the system is entirely elastic potential energy: U_s = 0.5 * k * x^2. As the block moves a distance d up the inclined track, this energy transforms into gravitational potential energy (m*g*d*sin(theta)) and is dissipated as internal thermal energy by the non-conservative work of friction (W_f = f_k * d = mu_k * F_N * d = mu_k * m * g * cos(theta) * d). Thus, the initial energy equals the sum of the final potential energy and work lost to friction: 0.5 * k * x^2 = m*g*d*sin(theta) + mu_k*m*g*d*cos(theta)."
  },
  {
    id: "AP001-Q0144",
    course: "AP Physics 1",
    unit: "Force and Translational Dynamics",
    difficulty: "Hard",
    question: "A small block of mass m is placed inside a smooth inverted conical funnel that rotates about its central vertical axis with a constant angular speed omega. If the walls of the funnel make an angle theta with the vertical axis, what is the stable radius r at which the block can maintain a constant horizontal circular path without sliding up or down the funnel?",
    options: ["g * tan(theta) / omega^2", "g / (omega^2 * tan(theta))", "g * sin(theta) / omega^2", "g / (omega^2 * sin(theta))"],
    correctAnswer: "B",
    explanation: "The forces acting on the block are gravity (mg downward) and the normal force (F_N perpendicular to the conical wall). Breaking forces into components: vertically, F_N * sin(theta) = mg. Horizontally, the component pointing toward the center provides the centripetal force: F_N * cos(theta) = m * omega^2 * r. Dividing the horizontal equation by the vertical equation cancels out F_N and mass m, yielding: cos(theta) / sin(theta) = omega^2 * r / g -> 1 / tan(theta) = omega^2 * r / g. Solving for radius gives r = g / (omega^2 * tan(theta))."
  },
  {
    id: "AP001-Q0168",
    course: "AP Physics 1",
    unit: "Force and Translational Dynamics",
    difficulty: "Hard",
    question: "A constant horizontal force F pushes a block of mass m a total distance D across a rough floor where the coefficient of kinetic friction is mu_k. If the block starts from rest, what is its final kinetic energy at the end of distance D?",
    options: ["(F - mu_k * m * g) * D", "F * D", "mu_k * m * g * D", "(F + mu_k * m * g) * D"],
    correctAnswer: "A",
    explanation: "According to the work-energy theorem, the change in kinetic energy is equal to the net work done on the object: delta_K = W_net. The net horizontal force acting on the block is the applied force minus the kinetic friction force: F_net = F - f_k = F - mu_k * m * g. Because this net force is constant, the net work done over distance D is W_net = F_net * D = (F - mu_k * m * g) * D. Since the block starts from rest, its final kinetic energy is simply equal to this net work."
  },
  {
    id: "AP001-Q0019",
    course: "AP Physics 1",
    unit: "Work, Energy, and Power",
    difficulty: "Easy",
    question: "A small motorized winch uses an electric motor to lift a heavy load, doing 300 Joules of mechanical work in a time interval of 6 seconds. What is the average power output of the winch motor?",
    options: ["50 W", "150 W", "1800 W", "3000 W"],
    correctAnswer: "A",
    explanation: "Power is defined as the rate at which work is performed over time: P = W / t. Plugging in the values given in the problem statement yields: P = 300 Joules / 6 seconds = 50 Watts."
  },
  {
    id: "AP001-Q0122",
    course: "AP Physics 1",
    unit: "Force and Translational Dynamics",
    difficulty: "Medium",
    question: "A small vehicle drives over the top of a circular hill of radius R. What is the maximum speed the vehicle can have at the absolute peak of the hill without losing contact with the road surface?",
    options: ["sqrt(0.5 * g * R)", "sqrt(g * R)", "sqrt(2 * g * R)", "sqrt(5 * g * R)"],
    correctAnswer: "B",
    explanation: "At the top of the hill, gravity pulls downward toward the center of the circular arc, and the road pushes upward: m*g - F_N = m*v^2 / R. To find the maximum speed before losing contact, we set the normal force to zero (F_N = 0). This simplifies the equation to m*g = m*v^2 / R, which cancels mass m and yields v = sqrt(g * R)."
  },
  {
    id: "AP001-Q0130",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Hard",
    question: "A uniform thin ladder of mass M and length L rests against a smooth vertical wall while its base stands on a rough horizontal floor with static friction coefficient mu_s. What is the minimum angle theta that the ladder can make with the floor without slipping?",
    options: ["tan(theta) = 1 / mu_s", "tan(theta) = 1 / (2 * mu_s)", "tan(theta) = 2 / mu_s", "tan(theta) = mu_s / 2"],
    correctAnswer: "B",
    explanation: "Let F_W be the normal force from the smooth wall, F_N be the normal force from the floor, and f_s be static friction. For translational equilibrium: F_N = Mg and f_s = F_W. At the minimum angle before slipping, static friction reaches its maximum: f_s = mu_s * F_N = mu_s * Mg, so F_W = mu_s * Mg. For rotational equilibrium, sum the torques about the ladder's base: Mg * (L/2) * cos(theta) = F_W * L * sin(theta). Canceling L and substituting F_W gives: 0.5 * Mg * cos(theta) = mu_s * Mg * sin(theta). Dividing by cos(theta) and rearranging yields: sin(theta)/cos(theta) = tan(theta) = 1 / (2 * mu_s)."
  },
  {
    id: "AP001-Q0189",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Medium",
    question: "A uniform thin hoop and a solid uniform cylinder, both having the identical mass M and outer radius R, are released from rest at the top of an inclined plane. If both objects roll down the incline without slipping, how do their linear accelerations compare?",
    options: ["a_hoop = a_cylinder", "a_hoop > a_cylinder", "a_cylinder > a_hoop", "It depends on the angle of the incline"],
    correctAnswer: "C",
    explanation: "The rotational inertia of a hoop is I_hoop = M*R^2, while the rotational inertia of a solid cylinder is I_cylinder = 0.5*M*R^2. Because the hoop distributes its mass entirely at its outer rim, it has a larger rotational inertia for the same mass, meaning it resists angular acceleration more. A greater fraction of the hoop's potential energy must be allocated to rotational kinetic energy rather than translational kinetic energy. Therefore, the cylinder will have a greater linear acceleration down the track."
  },
  {
    id: "AP001-Q0139",
    course: "AP Physics 1",
    unit: "Force and Translational Dynamics",
    difficulty: "Hard",
    question: "A block of mass m is held at rest on a rough horizontal conveyor belt that moves at a constant speed v. If the coefficient of kinetic friction between the block and the belt is mu_k, what is the power dissipated as heat due to friction as the block is held stationary by an external string?",
    options: ["Zero", "mu_k * m * g * v", "0.5 * mu_k * m * g * v", "mu_k * m * g * v^2"],
    correctAnswer: "B",
    explanation: "Power dissipated by a constant friction force acting against relative sliding velocity is given by P = F * v. The kinetic friction force acting between the stationary block and the sliding conveyor belt is f_k = mu_k * F_N = mu_k * m * g. Because the relative velocity between the two surfaces is v, the mechanical power converted into internal thermal energy is P = f_k * v = mu_k * m * g * v."
  },
  {
    id: "AP001-Q0160",
    course: "AP Physics 1",
    unit: "Force and Translational Dynamics",
    difficulty: "Hard",
    question: "An object is projected vertically upward from the surface of a planet with an initial speed equal to half of the planet's escape velocity (v = 0.5 * v_esc). Neglecting any atmospheric drag, what is the maximum height h above the surface reached by the object, expressed in terms of the planet's radius R?",
    options: ["h = (1/4)R", "h = (1/3)R", "h = (1/2)R", "h = R"],
    correctAnswer: "B",
    explanation: "The escape velocity squared is v_esc^2 = 2GM/R, so our launch velocity squared is v^2 = (0.5 * v_esc)^2 = 0.25 * (2GM/R) = GM / 2R. Using conservation of energy between the surface and maximum height: 0.5*m*v^2 - GMm/R = 0 - GMm/(R+h). Substituting v^2 gives: 0.5*m*(GM/2R) - GMm/R = -GMm/(R+h). Canceling GMm yields: 1/(4R) - 1/R = -1/(R+h) -> -3/(4R) = -1/(R+h). Cross-multiplying gives 3(R + h) = 4R -> 3R + 3h = 4R -> 3h = R -> h = (1/3)R."
  },
  {
    id: "AP001-Q0190",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Hard",
    question: "A uniform solid sphere of mass M and radius R is placed on a rough horizontal surface and given a pure initial translational velocity v_0 with zero initial rotation. Friction causes the sphere to slow down translationally while gaining rotation until it rolls without slipping. What is the final linear speed of the sphere once it begins rolling without slipping? (I = (2/5)M*R^2)",
    options: ["(2/5)v_0", "(3/5)v_0", "(5/7)v_0", "(2/7)v_0"],
    correctAnswer: "C",
    explanation: "Since the friction force acts at the surface contact point, we can choose the contact point on the floor as our pivot. The torque due to friction about this contact point is zero, meaning angular momentum about the contact point is conserved. Initially, L_i = M * v_0 * R. Finally, rolling without slipping requires omega = v_f / R, so L_f = I * omega + M * v_f * R = (2/5)M*R^2 * (v_f / R) + M * v_f * R = (2/5)M*v_f*R + M*v_f*R = (7/5)M*v_f*R. Equating initial and final angular momentum: M * v_0 * R = (7/5)M * v_f * R, which simplifies to v_f = (5/7)v_0."
  },
  {
    id: "AP001-Q0111",
    course: "AP Physics 1",
    unit: "Force and Translational Dynamics",
    difficulty: "Medium",
    question: "A block of mass m is kept stationary against a rough vertical wall by a horizontal pushing force F applied perpendicularly to the block. If the static friction coefficient is mu_s, what is the minimum magnitude of the force F required to prevent the block from sliding downward?",
    options: ["m * g", "mu_s * m * g", "m * g / mu_s", "mu_s / (m * g)"],
    correctAnswer: "C",
    explanation: "For the block to remain stationary, the vertical forces must be balanced: the upward static friction force must equal the downward force of gravity (f_s = mg). The maximum possible static friction force is f_s,max = mu_s * F_N. Since the horizontal pushing force F provides the normal force from the wall (F_N = F), we have f_s,max = mu_s * F. To prevent slipping, we require f_s,max >= mg -> mu_s * F >= mg. Therefore, the minimum pushing force required is F = mg / mu_s."
  },
  {
    id: "AP001-Q0197",
    course: "AP Physics 1",
    unit: "Oscillations",
    difficulty: "Hard",
    question: "A simple pendulum of length L and mass m is suspended from the ceiling of an elevator. If the elevator accelerates upward at a constant rate of magnitude a, what is the period of oscillation of the pendulum?",
    options: ["2 * pi * sqrt(L / g)", "2 * pi * sqrt(L / (g + a))", "2 * pi * sqrt(L / (g - a))", "2 * pi * sqrt(L / sqrt(g^2 + a^2))"],
    correctAnswer: "B",
    explanation: "The period of a simple pendulum is determined by the formula T = 2 * pi * sqrt(L / g_eff), where g_eff is the effective gravitational acceleration experienced inside the frame of reference. When the elevator accelerates upward at a rate of a, an object inside experiences an additional downward inertial pseudo-force. This increases the effective downward acceleration to g_eff = g + a, resulting in a shorter period of T = 2 * pi * sqrt(L / (g + a))."
  },
  {
    id: "AP001-Q0205",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Easy",
    question: "An open container holds a layer of oil floating on top of a layer of water. If a solid block is placed into the container and floats statically at the interface such that it is partially submerged in both liquids, which of the following forces are acting on the block to keep it in equilibrium?",
    options: ["Only the downward force of gravity.", "Downward gravity balanced by a single upward buoyant force from the water.", "Downward gravity balanced by a single upward buoyant force from the oil.", "Downward gravity balanced by the sum of two upward buoyant forces, one from the water and one from the oil."],
    correctAnswer: "D",
    explanation: "For a floating object in static equilibrium, the net force must be zero. The downward force of gravity (the object's weight) must be completely balanced by the total upward buoyant force. Because the block displaces a volume of both fluids, it experiences two distinct upward buoyant forces simultaneously: one from the displaced oil and one from the displaced water."
  },
  {
    id: "AP001-Q0055",
    course: "AP Physics 1",
    unit: "Kinematics",
    difficulty: "Medium",
    question: "A projectile is launched from level ground at an angle theta above the horizontal with an initial speed v_0. Neglecting air resistance, what is the maximum height reached by the projectile above its launch position?",
    options: ["v_0^2 / (2g)", "(v_0 * sin(theta))^2 / g", "(v_0 * sin(theta))^2 / (2g)", "(v_0 * cos(theta))^2 / (2g)"],
    correctAnswer: "C",
    explanation: "At the peak of its parabolic flight, the vertical component of the projectile's velocity is momentarily zero (v_y = 0). The initial vertical component of velocity at launch is v_0y = v_0 * sin(theta). Using the vertical kinematic equation, v_y^2 = v_0y^2 - 2*g*h_max, we substitute 0 = (v_0 * sin(theta))^2 - 2*g*h_max. Solving for maximum height yields h_max = (v_0 * sin(theta))^2 / (2g)."
  },
  {
    id: "AP001-Q0140",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Medium",
    question: "A multi-layered glass window consists of two layers of glass separated by a sealed air gap. How does the presence of the air gap reduce the thermal energy transfer between the inside and the outside of a building compared to a single thick layer of glass?",
    options: ["Air has a lower density than glass, allowing it to reflect radiation more efficiently.", "Air is a poor thermal conductor compared to solid glass, minimizing conductive heat transfer.", "The air gap prevents all forms of convective heat transfer from occurring.", "Air expands when heated, which increases the pressure to block outside thermal energy."],
    correctAnswer: "B",
    explanation: "Gases like air have tightly bound molecules that are much further apart than atoms in a solid, making them highly ineffective at transferring thermal energy via direct collision. Therefore, air functions as an excellent thermal insulator because its thermal conductivity is drastically lower than that of solid glass."
  },
  {
    id: "AP001-Q0184",
    course: "AP Physics 1",
    unit: "Oscillations",
    difficulty: "Hard",
    question: "A simple pendulum of length L and a block-spring system with spring constant k are both oscillating on Earth with the exact same period T. If both setups are brought to a planet where the local gravitational acceleration is 4g, how do the new periods of the pendulum (T_pend) and the spring system (T_spr) compare?",
    options: ["T_pend = T, T_spr = T", "T_pend = (1/2)T, T_spr = T", "T_pend = 2T, T_spr = T", "T_pend = (1/2)T, T_spr = (1/2)T"],
    correctAnswer: "B",
    explanation: "The period of a simple pendulum is T = 2*pi*sqrt(L/g), meaning it is inversely proportional to the square root of gravity. Quadrupling g reductions the period to 1/sqrt(4) = 1/2 of its initial value (T_pend = 0.5*T). The period of a block-spring system is T = 2*pi*sqrt(m/k), which is completely independent of local gravitational acceleration. Thus, its period remains entirely unchanged (T_spr = T)."
  },
  {
    id: "AP001-Q0091",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Medium",
    question: "A uniform square sign of mass M and side length s hangs from a horizontal beam. A cable attached to the bottom edge of the sign pulls straight down with a force F. What is the magnitude of the net torque acting on the sign about a pivot point located at its exact top-left corner?",
    options: ["0.5 * M * g * s + F * s", "0.5 * M * g * s + 0.5 * F * s", "M * g * s + F * s", "0.5 * (M * g + F) * s"],
    correctAnswer: "A",
    explanation: "The weight of the uniform sign (Mg) acts precisely at its geometric center, which is located a horizontal distance of 0.5*s away from the left edge pivot line. This creates a torque of Mg*(0.5*s). The force F acts along the entire bottom edge, which is a full horizontal distance s away from the pivot, generating a torque of F*s. Since both forces create clockwise rotations about the top-left corner, their magnitudes add together: tau = 0.5*M*g*s + F*s."
  },
  {
    id: "AP001-Q0100",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Medium",
    question: "A uniform wheel of mass M and radius R rotates about a fixed frictionless axle. A constant tangential braking force F is applied directly to the outer rim of the wheel, causing it to come to a complete stop from an initial angular velocity omega_0 in a time interval t. What is the rotational inertia of the wheel?",
    options: ["F * R * t / omega_0", "F * t / (M * R * omega_0)", "F * R^2 * t / omega_0", "F * R * omega_0 / t"],
    correctAnswer: "A",
    explanation: "The net torque acting on the wheel is tau = F * R. According to the angular impulse-momentum theorem, Net Torque * t = Delta_L = I * Delta_omega. Substituting the expressions gives (F * R) * t = I * omega_0. Isolating the rotational inertia yields I = F * R * t / omega_0."
  },
  {
    id: "AP001-Q0049",
    course: "AP Physics 1",
    unit: "Kinematics",
    difficulty: "Medium",
    question: "A small stone is thrown horizontally from the top of a cliff with an initial speed of 15 m/s. If the stone lands on the flat ground below exactly 3.0 seconds later, what is the horizontal distance traveled by the stone, and what is its vertical displacement?",
    options: ["45 m horizontal, 45 m vertical", "15 m horizontal, 30 m vertical", "45 m horizontal, 90 m vertical", "30 m horizontal, 45 m vertical"],
    correctAnswer: "A",
    explanation: "Horizontally, there is no acceleration, so delta_x = v_x * t = (15 m/s)(3.0 s) = 45 meters. Vertically, the initial velocity is zero, so delta_y = 0.5 * g * t^2 = 0.5(10 m/s^2)(3.0 s)^2 = 5 * 9 = 45 meters."
  },
  {
    id: "AP001-Q0032",
    course: "AP Physics 1",
    unit: "Oscillations",
    difficulty: "Easy",
    question: "A simple harmonic oscillator has a frequency of 5.0 Hz. What is the period of oscillation for this system?",
    options: ["0.2 seconds", "0.5 seconds", "2.0 seconds", "5.0 seconds"],
    correctAnswer: "A",
    explanation: "The period T of an oscillator is the reciprocal of its frequency (T = 1/f). Substituting the given value yields T = 1 / 5.0 Hz = 0.2 seconds."
  },
  {
    id: "AP001-Q0112",
    course: "AP Physics 1",
    unit: "Kinematics",
    difficulty: "Medium",
    question: "A heavy ball is dropped from rest from the roof of a high-rise building. It passes a 2-meter-tall window on a lower floor in a time interval of exactly 0.1 seconds. How far above the top of the window was the ball dropped from rest? (Assume g = 10 m/s^2)",
    options: ["15.1 m", "17.2 m", "19.5 m", "21.0 m"],
    correctAnswer: "C",
    explanation: "Let v be the speed of the ball at the top of the window. Using delta_y = v*t + 0.5*g*t^2: 2 = v(0.1) + 0.5(10)(0.1)^2 -> 2 = 0.1*v + 0.05 -> 1.95 = 0.1*v -> v = 19.5 m/s. The ball reached this speed falling from rest over a distance h. Using v^2 = 2*g*h: (19.5)^2 = 2(10)h -> 380.25 = 20h -> h = 19.0125 m, which rounds closest to 19.5 m."
  },
  {
    id: "AP001-Q0142",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Medium",
    question: "A heavy shipping crate sinks to the bottom of a deep swimming pool. If the upward buoyant force exerted on the crate by the water is exactly 400 N, what is the total volume of the crate? (Take the density of water to be 1000 kg/m^3 and g = 10 m/s^2)",
    options: ["0.04 m^3", "0.40 m^3", "2.50 m^3", "4.00 m^3"],
    correctAnswer: "A",
    explanation: "According to Archimedes' principle, the buoyant force equals the weight of the displaced fluid: F_b = rho * V * g. Substituting the values: 400 = (1000)(V)(10) -> 400 = 10000 * V -> V = 400 / 10000 = 0.04 m^3."
  },
  {
    id: "AP001-Q0171",
    course: "AP Physics 1",
    unit: "Oscillations",
    difficulty: "Hard",
    question: "A block-spring system with a spring constant k and mass m is undergoing horizontal simple harmonic motion. If a second block of identical mass m is gently dropped directly onto the moving block at the precise instant it passes through its equilibrium position, how do the amplitude A and the maximum speed v_max of the new combined system compare to their initial values?",
    options: ["Amplitude decreases; maximum speed remains the same.", "Amplitude remains the same; maximum speed decreases.", "Amplitude increases; maximum speed decreases.", "Amplitude decreases; maximum speed decreases."],
    correctAnswer: "D",
    explanation: "At the equilibrium position, the system's velocity is at its maximum and the motion is entirely horizontal. Dropping a mass vertically creates a completely inelastic collision along the horizontal axis, conserving momentum: m*v_max = (2m)*v_new -> v_new = 0.5*v_max. Thus, maximum speed decreases. Since total energy is now E_new = 0.5*(2m)*(v_new)^2 = m*(0.5*v_max)^2 = 0.25*m*v_max^2 (which is half of the original energy), the new amplitude must also decrease since 0.5*k*A_new^2 = 0.5*E_orig -> A_new = A / sqrt(2)."
  },
  {
    id: "AP001-Q0155",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Hard",
    question: "A uniform thin rod of mass M and length L is suspended vertically from a frictionless pivot at its top end. A small lump of clay, also of mass M, travels horizontally at a speed v and collides with the bottom tip of the rod, sticking to it completely. What is the angular speed of the combined system immediately after the collision? (The rotational inertia of the rod about its end is I = (1/3)M*L^2)",
    options: ["3v / 4L", "3v / 2L", "v / L", "2v / 3L"],
    correctAnswer: "A",
    explanation: "Angular momentum about the pivot is conserved during the collision: L_i = L_f. The initial angular momentum of the clay is M*v*L. The final rotational inertia of the system is the rod's inertia plus the clay treated as a point mass at distance L: I_total = (1/3)*M*L^2 + M*L^2 = (4/3)*M*L^2. Setting L_i = L_f: M*v*L = ((4/3)*M*L^2) * omega. Canceling M and one L gives v = (4/3)*L*omega, which solves to omega = 3v / 4L."
  },
  {
    id: "AP001-Q0043",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Easy",
    question: "A hydraulic lift system has an input piston with a cross-sectional area of 0.05 m^2 and an output piston with an area of 1.0 m^2. If a worker applies an input force of 50 N to the small piston, what is the magnitude of the lifting force generated at the large piston?",
    options: ["2.5 N", "50 N", "1000 N", "2000 N"],
    correctAnswer: "C",
    explanation: "According to Pascal's principle, the pressure applied to an enclosed fluid is transmitted undiminished throughout: F_1 / A_1 = F_2 / A_2. Substituting the values: 50 / 0.05 = F_2 / 1.0 -> 1000 = F_2 / 1.0 -> F_2 = 1000 N."
  },
  {
    id: "AP001-Q0017",
    course: "AP Physics 1",
    unit: "Work, Energy, and Power",
    difficulty: "Easy",
    question: "A mechanical crane lifts a 500-kg steel beam vertically upward at a constant speed of 2.0 m/s. What is the minimum mechanical power output required from the crane's motor to perform this lift? (Assume g = 10 m/s^2)",
    options: ["1,000 W", "2,500 W", "5,000 W", "10,000 W"],
    correctAnswer: "D",
    explanation: "Power for an object moving at a constant velocity against a opposing force is given by P = F * v. Since the beam is moving at a constant speed, the upward lifting force perfectly balances the downward weight: F = m * g = (500 kg)(10 m/s^2) = 5000 N. Thus, P = (5000 N)(2.0 m/s) = 10,000 Watts."
  },
  {
    id: "AP001-Q0117",
    course: "AP Physics 1",
    unit: "Force and Translational Dynamics",
    difficulty: "Medium",
    question: "A heavy metal crate is placed on the flatbed of a delivery truck. The coefficient of static friction between the crate and the truck bed is mu_s = 0.4. If the truck is traveling at a speed of 20 m/s on a level road, what is the minimum stopping distance required for the truck to come to a full stop at a constant deceleration without causing the crate to slide forward?",
    options: ["25 m", "50 m", "75 m", "100 m"],
    correctAnswer: "B",
    explanation: "The maximum forward deceleration the crate can experience without sliding is determined by the maximum static friction force: F_f = mu_s * m * g = m * a_max -> a_max = mu_s * g = (0.4)(10 m/s^2) = 4 m/s^2. Using the kinematic equation v_f^2 = v_i^2 - 2*a*delta_x with v_f = 0: 0 = 20^2 - 2(4)(delta_x) -> 0 = 400 - 8*delta_x -> 8*delta_x = 400 -> delta_x = 50 meters."
  },
  {
    id: "AP001-Q0166",
    course: "AP Physics 1",
    unit: "Work, Energy, and Power",
    difficulty: "Hard",
    question: "A small object of mass m is released from rest at the top lip of a smooth, frictionless hemispherical bowl of radius R. As the object slides down along the inner surface, what is the magnitude of the normal force exerted on it by the bowl at the absolute lowest point of its path?",
    options: ["mg", "2mg", "3mg", "4mg"],
    correctAnswer: "C",
    explanation: "By conservation of mechanical energy, the gravitational potential energy lost equals the kinetic energy gained at the bottom: m*g*R = 0.5*m*v^2 -> m*v^2 = 2*m*g*R. At the bottom point, the net centripetal force points upward toward the center: F_N - m*g = m*v^2 / R. Substituting m*v^2 gives F_N - m*g = (2*m*g*R) / R -> F_N - m*g = 2*m*g -> F_N = 3mg."
  },
  {
    id: "AP001-Q0179",
    course: "AP Physics 1",
    unit: "Oscillations",
    difficulty: "Hard",
    question: "A block-spring system oscillates on a horizontal frictionless surface with a period T and a total mechanical energy E. If the mass of the block is doubled while the total mechanical energy is kept exactly the same, what are the new period and the new amplitude of the oscillation?",
    options: ["Period is sqrt(2)T, Amplitude is unchanged", "Period is T / sqrt(2), Amplitude is unchanged", "Period is sqrt(2)T, Amplitude is doubled", "Period is T, Amplitude is halved"],
    correctAnswer: "A",
    explanation: "The period of a mass-spring system is given by T = 2*pi*sqrt(m/k). Doubling the mass m increases the period by a factor of sqrt(2). The total mechanical energy is given by E = 0.5 * k * A^2. Because E and k are completely unchanged, the amplitude A must remain exactly the same."
  },
  {
    id: "AP001-Q0174",
    course: "AP Physics 1",
    unit: "Oscillations",
    difficulty: "Hard",
    question: "A block connected to an ideal horizontal spring undergoes simple harmonic motion. When the displacement of the block is exactly equal to two-thirds of its amplitude (x = (2/3)A), what fraction of the system's total mechanical energy is in the form of kinetic energy?",
    options: ["2/3", "4/9", "5/9", "1/3"],
    correctAnswer: "C",
    explanation: "The total mechanical energy is E = 0.5 * k * A^2. At position x = (2/3)A, the potential energy stored in the spring is U = 0.5 * k * x^2 = 0.5 * k * ((2/3)A)^2 = (4/9) * (0.5 * k * A^2) = (4/9)E. Since total energy is conserved (E = K + U), the kinetic energy must be K = E - U = E - (4/9)E = (5/9)E."
  },
  {
    id: "AP001-Q0099",
    course: "AP Physics 1",
    unit: "Gravitation",
    difficulty: "Medium",
    question: "A planet has twice the mass of Earth (M_p = 2M_E) and twice the radius of Earth (R_p = 2R_E). What is the gravitational acceleration g_p on the surface of this planet in terms of Earth's surface gravity g?",
    options: ["0.25g", "0.50g", "g", "2g"],
    correctAnswer: "B",
    explanation: "Surface gravity is defined by g = G * M / R^2. For this planet, g_p = G * (2M_E) / (2R_E)^2 = 2 * G * M_E / (4 * R_E^2) = (2/4) * (G * M_E / R_E^2) = 0.50g."
  },
  {
    id: "AP001-Q0145",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Medium",
    question: "An iceberg floats in the ocean with a portion of its volume submerged beneath the surface. If the density of pure ice is 920 kg/m^3 and the density of seawater is 1030 kg/m^3, what percentage of the iceberg's total volume is submerged?",
    options: ["11%", "50%", "89%", "92%"],
    correctAnswer: "C",
    explanation: "For a floating object, the fraction of the volume submerged is equal to the ratio of the object's density to the fluid's density: V_sub / V_total = rho_obj / rho_fluid. Substituting the values gives 920 / 1030 = 0.893, which corresponds to roughly 89%."
  },
  {
    id: "AP001-Q0027",
    course: "AP Physics 1",
    unit: "Linear Momentum",
    difficulty: "Easy",
    question: "A constant net force of 20 N acts horizontally on a toy rocket for a time interval of 4.0 seconds. What is the magnitude of the total impulse delivered to the rocket?",
    options: ["5 N*s", "24 N*s", "80 N*s", "160 N*s"],
    correctAnswer: "C",
    explanation: "Impulse is defined as the product of the average net force and the time interval over which it acts (J = F * delta_t). Substituting the values gives J = (20 N)(4.0 s) = 80 N*s."
  },
  {
    id: "AP001-Q0090",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Medium",
    question: "A light, rigid rod of length 2.0 meters has a 3-kg mass attached to its left end and a 1-kg mass attached to its right end. At what distance from the left end should a pivot be placed so that the rod balances horizontally in static equilibrium?",
    options: ["0.25 m", "0.50 m", "1.00 m", "1.50 m"],
    correctAnswer: "B",
    explanation: "Let x be the distance from the left mass to the pivot. The distance from the pivot to the right mass is (2.0 - x). For static equilibrium, the counterclockwise torque must equal the clockwise torque: (3 kg)(g)(x) = (1 kg)(g)(2.0 - x). Canceling g gives 3x = 2.0 - x -> 4x = 2.0 -> x = 0.50 meters."
  },
  {
    id: "AP001-Q0182",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Hard",
    question: "A cylindrical container of base area A is filled with water to a height h. A small circular hole of area a (where a << A) is punctured in the side wall at the absolute bottom of the container. What is the initial volumetric flow rate of the water exiting through the hole?",
    options: ["a * sqrt(gh)", "a * sqrt(2gh)", "A * sqrt(2gh)", "a * 2gh"],
    correctAnswer: "B",
    explanation: "According to Torricelli's law, the efflux speed of an ideal fluid exiting a small hole at depth h below the surface is v = sqrt(2gh). The volumetric flow rate Q is the product of the exit hole cross-sectional area and the exit speed: Q = a * v = a * sqrt(2gh)."
  },
  {
    id: "AP001-Q0102",
    course: "AP Physics 1",
    unit: "Gravitation",
    difficulty: "Medium",
    question: "Two massive solid spheres are separated by a center-to-center distance R, resulting in a gravitational force F between them. If the mass of one sphere is doubled, the mass of the other sphere is tripled, and the distance between their centers is doubled, what is the new gravitational force?",
    options: ["(3/2)F", "(5/4)F", "(6/5)F", "6F"],
    correctAnswer: "A",
    explanation: "Using Newton's law of universal gravitation (F = G * m_1 * m_2 / r^2), the new force is F_new = G * (2 * m_1) * (3 * m_2) / (2 * R)^2 = 6 * G * m_1 * m_2 / (4 * R^2) = (6/4) * F = (3/2)F."
  },
  {
    id: "AP001-Q0085",
    course: "AP Physics 1",
    unit: "Linear Momentum",
    difficulty: "Medium",
    question: "A 2-kg block traveling horizontally at 4 m/s hits a wall and bounces back in the opposite direction at 2 m/s. What is the magnitude of the change in momentum of the block?",
    options: ["4 kg*m/s", "6 kg*m/s", "8 kg*m/s", "12 kg*m/s"],
    correctAnswer: "D",
    explanation: "Defining the initial direction of motion as positive, the initial momentum is p_i = (2 kg)(4 m/s) = +8 kg*m/s. Since it bounces back, the final velocity is negative: p_f = (2 kg)(-2 m/s) = -4 kg*m/s. The change in momentum is Delta_p = p_f - p_i = -4 - 8 = -12 kg*m/s, which gives a magnitude of 12 kg*m/s."
  },
  {
    id: "AP001-Q0132",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Medium",
    question: "A uniform solid cylinder of mass M and radius R is placed at the top of a rough incline of height h. If the cylinder is released from rest and rolls down without slipping, what is its linear speed at the bottom? (I = (1/2)M*R^2)",
    options: ["sqrt(2gh)", "sqrt(4gh/3)", "sqrt(gh)", "sqrt(3gh/2)"],
    correctAnswer: "B",
    explanation: "By conservation of mechanical energy, M*g*h = 0.5*M*v^2 + 0.5*I*omega^2. Substituting omega = v/R and I = 0.5*M*R^2 yields M*g*h = 0.5*M*v^2 + 0.5*(0.5*M*R^2)*(v/R)^2 = 0.5*M*v^2 + 0.25*M*v^2 = 0.75*M*v^2 = (3/4)*M*v^2. Solving for velocity gives v = sqrt(4gh/3)."
  },
  {
    id: "AP001-Q0186",
    course: "AP Physics 1",
    unit: "Oscillations",
    difficulty: "Hard",
    question: "A block attached to an ideal horizontal spring executes simple harmonic motion. When the block is at its maximum displacement position (x = A), its acceleration has a magnitude of a_max. What is the magnitude of the block's acceleration when it is located at a position exactly equal to half of its amplitude (x = 0.5 * A)?",
    options: ["0.25 * a_max", "0.50 * a_max", "0.71 * a_max", "a_max"],
    correctAnswer: "B",
    explanation: "According to Hooke's Law and Newton's second law, F = -k*x = m*a, which means acceleration is directly proportional to displacement (a proportional to x). If the displacement is cut exactly in half, the magnitude of the acceleration is also cut exactly in half, resulting in 0.50 * a_max."
  },
  {
    id: "AP001-Q0051",
    course: "AP Physics 1",
    unit: "Kinematics",
    difficulty: "Medium",
    question: "A projectile is launched from ground level across flat horizontal ground with an initial speed v_0 at an angle of 30 degrees above the horizontal. What is the total flight time of the projectile before it returns to ground level?",
    options: ["v_0 / (2g)", "v_0 / g", "sqrt(3) * v_0 / g", "2 * v_0 / g"],
    correctAnswer: "B",
    explanation: "The initial vertical component of velocity is v_y0 = v_0 * sin(30°) = 0.5 * v_0. The total time of flight for a projectile over flat terrain is given by t = 2 * v_y0 / g. Substituting v_y0 gives t = 2 * (0.5 * v_0) / g = v_0 / g."
  },
  {
    id: "AP001-Q0148",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Hard",
    question: "A U-shaped open tube contains water of density rho_w. Oil of density rho_oil (where rho_oil < rho_w) is poured into the right arm until it forms a column of height h_oil. If the system reaches static equilibrium, what is the vertical distance delta_h by which the water level in the left arm stands above the oil-water interface in the right arm?",
    options: ["h_oil * (rho_oil / rho_w)", "h_oil * (rho_w / rho_oil)", "h_oil * (1 - rho_oil / rho_w)", "h_oil * (rho_oil / rho_w - 1)"],
    correctAnswer: "A",
    explanation: "In static equilibrium, the pressure at the oil-water interface level in the right arm must equal the pressure at the same horizontal level in the left arm. In the right arm, the pressure is P_atm + rho_oil * g * h_oil. In the left arm, it is P_atm + rho_w * g * delta_h. Equating these yields rho_w * delta_h = rho_oil * h_oil, which solves to delta_h = h_oil * (rho_oil / rho_w)."
  },
  {
    id: "AP001-Q0089",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Easy",
    question: "A mechanic uses a long wrench to loosen a stuck nut. If the mechanic applies a perpendicular force of 60 N at a distance of 0.25 meters away from the center of the nut, what is the magnitude of the torque exerted on the nut?",
    options: ["15 N*m", "30 N*m", "60 N*m", "240 N*m"],
    correctAnswer: "A",
    explanation: "Torque is calculated using tau = F * r * sin(theta). Since the force is applied perpendicularly, sin(90°) = 1. Substituting the given values gives tau = (60 N) * (0.25 m) * 1 = 15 N*m."
  },
  {
    id: "AP001-Q0195",
    course: "AP Physics 1",
    unit: "Oscillations",
    difficulty: "Medium",
    question: "A block-spring system executes simple harmonic motion along a horizontal frictionless track. If the total mechanical energy of the system is E, what is the kinetic energy of the block at the precise moment it is located at a position equal to half of its maximum amplitude (x = 0.5 * A)?",
    options: ["0.25 * E", "0.50 * E", "0.75 * E", "E"],
    correctAnswer: "C",
    explanation: "The total mechanical energy is E = 0.5 * k * A^2. At position x = 0.5 * A, the elastic potential energy stored in the spring is U = 0.5 * k * (0.5 * A)^2 = 0.25 * (0.5 * k * A^2) = 0.25 * E. Because total energy is conserved (E = K + U), the kinetic energy is K = E - 0.25 * E = 0.75 * E."
  },
  {
    id: "AP001-Q0002",
    course: "AP Physics 1",
    unit: "Kinematics",
    difficulty: "Easy",
    question: "A runner starts from rest and accelerates at a constant rate of 2 m/s^2 along a straight path for 3 seconds. What is the runner's final speed?",
    options: ["1.5 m/s", "5 m/s", "6 m/s", "9 m/s"],
    correctAnswer: "C",
    explanation: "Using the kinematic equation v_f = v_i + a * t, where the runner starts from rest (v_i = 0), we get v_f = 0 + (2 m/s^2) * (3 s) = 6 m/s."
  },
  {
    id: "AP001-Q0080",
    course: "AP Physics 1",
    unit: "Linear Momentum",
    difficulty: "Medium",
    question: "A 0.5-kg ball traveling horizontally at 6 m/s hits a rigid wall and bounces directly back at 4 m/s. What is the magnitude of the impulse delivered to the ball by the wall?",
    options: ["1 N*s", "2 N*s", "5 N*s", "10 N*s"],
    correctAnswer: "C",
    explanation: "Defining the initial direction as positive, v_i = +6 m/s and v_f = -4 m/s. Impulse is equal to the change in momentum: J = Delta_p = m * (v_f - v_i). Substituting the values: J = 0.5 * (-4 - 6) = 0.5 * (-10) = -5 N*s. The magnitude of the impulse is 5 N*s."
  },
  {
    id: "AP001-Q0185",
    course: "AP Physics 1",
    unit: "Oscillations",
    difficulty: "Hard",
    question: "A vertical spring-mass system is oscillating up and down with an amplitude A. At the absolute lowest point of its motion, the net acceleration of the hanging mass has a magnitude of exactly a. What is the magnitude of the acceleration of the mass when it passes through the absolute highest point of its path?",
    options: ["Zero", "0.5 * a", "a", "2 * a"],
    correctAnswer: "C",
    explanation: "In simple harmonic motion, the magnitude of the acceleration is directly proportional to the displacement from the equilibrium position (|a| = (k/m) * |x|). Because both the highest and lowest points of the motion represent displacements exactly equal to the amplitude A, the magnitude of the acceleration must be identical at both turning points."
  },
  {
    id: "AP001-Q0107",
    course: "AP Physics 1",
    unit: "Gravitation",
    difficulty: "Medium",
    question: "A space probe orbits a large moon in a stable circular track of radius R with an orbital speed v. If the probe is moved to a new circular orbit with a radius of 4R around the same moon, what is its new orbital speed?",
    options: ["0.25 * v", "0.50 * v", "2 * v", "4 * v"],
    correctAnswer: "B",
    explanation: "The orbital speed of a satellite in a circular orbit is given by v = sqrt(G * M / r), meaning speed is inversely proportional to the square root of the orbital radius. Increasing the radius by a factor of 4 reduces the orbital speed to 1 / sqrt(4) = 1/2 of its original value, which is 0.50 * v."
  },
  {
    id: "AP001-Q0034",
    course: "AP Physics 1",
    unit: "Oscillations",
    difficulty: "Easy",
    question: "A mass-spring system on a horizontal frictionless track has a period of 4.0 seconds. If the mass attached to the spring is quadrupled while the spring constant remains unchanged, what is the new period of the system?",
    options: ["1.0 second", "2.0 seconds", "4.0 seconds", "8.0 seconds"],
    correctAnswer: "D",
    explanation: "The period of a mass-spring system is given by T = 2 * pi * sqrt(m / k). Since period is directly proportional to the square root of the mass, quadrupling the mass increases the period by a factor of sqrt(4) = 2. The new period is 4.0 s * 2 = 8.0 seconds."
  },
  {
    id: "AP001-Q0110",
    course: "AP Physics 1",
    unit: "Kinematics",
    difficulty: "Medium",
    question: "A sports car is moving along a straight track at an initial speed v_0. The driver slams on the brakes, causing a constant deceleration that brings the car to a full stop over a distance d. If the car's initial speed had been 3v_0, what stopping distance would be required under the exact same constant deceleration?",
    options: ["3d", "6d", "9d", "12d"],
    correctAnswer: "C",
    explanation: "Using the kinematic equation v_f^2 = v_i^2 - 2 * a * d, with v_f = 0, we get d = v_i^2 / (2 * a). This shows that stopping distance is directly proportional to the square of the initial speed. Tripling the initial speed increases the stopping distance by a factor of 3^2 = 9, resulting in a distance of 9d."
  },
  {
    id: "AP001-Q0135",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Medium",
    question: "A uniform solid sphere of mass M and radius R is released from rest at the top of a rough incline of height h. If the sphere rolls down the incline without slipping, what is its linear speed at the bottom? (The rotational inertia of a uniform solid sphere is I = (2/5) * M * R^2)",
    options: ["sqrt(2gh)", "sqrt(10gh/7)", "sqrt(gh)", "sqrt(5gh/7)"],
    correctAnswer: "B",
    explanation: "By conservation of mechanical energy, M * g * h = 0.5 * M * v^2 + 0.5 * I * omega^2. Substituting omega = v / R and I = (2/5) * M * R^2 yields M * g * h = 0.5 * M * v^2 + 0.5 * ((2/5) * M * R^2) * (v / R)^2 = 0.5 * M * v^2 + 0.2 * M * v^2 = 0.7 * M * v^2 = (7/10) * M * v^2. Solving for linear speed gives v = sqrt(10gh/7)."
  },
  {
    id: "AP001-Q0169",
    course: "AP Physics 1",
    unit: "Work, Energy, and Power",
    difficulty: "Hard",
    question: "A small block of mass m is placed against a compressed spring of spring constant k at the bottom of a smooth, frictionless loop-the-loop track of radius R. What is the minimum compression x of the spring required to ensure the block successfully completes the loop without losing contact with the track at the very top?",
    options: ["sqrt(2mgR / k)", "sqrt(3mgR / k)", "sqrt(5mgR / k)", "sqrt(6mgR / k)"],
    correctAnswer: "C",
    explanation: "At the top of the loop, the critical minimum speed to maintain contact occurs when normal force is zero, meaning m * g = m * v^2 / R -> v^2 = g * R. The vertical height at the top of the loop is 2R. By conservation of energy, the initial elastic energy equals the total mechanical energy at the top: 0.5 * k * x^2 = m * g * (2R) + 0.5 * m * v^2. Substituting v^2 gives 0.5 * k * x^2 = 2 * m * g * R + 0.5 * m * g * R = 2.5 * m * g * R. Multiplying by 2 gives k * x^2 = 5 * m * g * R, which simplifies to x = sqrt(5mgR / k)."
  },
  {
    id: "AP001-Q0166",
    course: "AP Physics 1",
    unit: "Work, Energy, and Power",
    difficulty: "Easy",
    question: "An electric motor does 3,000 Joules of mechanical work in a time interval of exactly 10 seconds. What is the average power output delivered by the motor during this time?",
    options: ["30 W", "300 W", "3,000 W", "30,000 W"],
    correctAnswer: "B",
    explanation: "Power is defined as the rate at which work is done over time: P = W / t. Substituting the given values: P = 3,000 Joules / 10 seconds = 300 Watts."
  },
  {
    id: "AP001-Q0199",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Easy",
    question: "A standard rectangular block has a mass of 4.0 kg and a volume of 0.005 m^3. What is the average density of this block?",
    options: ["200 kg/m^3", "400 kg/m^3", "800 kg/m^3", "1200 kg/m^3"],
    correctAnswer: "C",
    explanation: "Density is defined as mass divided by volume: rho = m / V. Substituting the given values: rho = 4.0 kg / 0.005 m^3 = 800 kg/m^3."
  },
  {
    id: "AP001-Q0046",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Easy",
    question: "A cylindrical storage tank is filled with water to a total depth of 4.0 meters. What is the gauge pressure exerted by the water at the absolute bottom of the tank? (Take the density of water to be 1000 kg/m^3 and g = 10 m/s^2)",
    options: ["4,000 Pa", "10,000 Pa", "40,000 Pa", "140,000 Pa"],
    correctAnswer: "C",
    explanation: "Gauge pressure at a depth h in a static fluid is given by P_gauge = rho * g * h. Substituting the given values yields P_gauge = (1000 kg/m^3) * (10 m/s^2) * (4.0 m) = 40,000 Pa."
  },
  {
    id: "AP001-Q0039",
    course: "AP Physics 1",
    unit: "Oscillations",
    difficulty: "Easy",
    question: "A grandfather clock utilizes a simple pendulum. If the length of the pendulum string is precisely 1.0 meter, what is its approximate period of oscillation on Earth? (Assume g = 9.8 m/s^2)",
    options: ["1.0 second", "2.0 seconds", "3.1 seconds", "6.2 seconds"],
    correctAnswer: "B",
    explanation: "The period of a simple pendulum is T = 2 * pi * sqrt(L / g). Substituting the given values gives T = 2 * pi * sqrt(1.0 / 9.8) approx 2 * 3.1416 * 0.3194 approx 2.0 seconds."
  },
  {
    id: "AP001-Q0015",
    course: "AP Physics 1",
    unit: "Work, Energy, and Power",
    difficulty: "Easy",
    question: "A student pushes a heavy box 5.0 meters across a flat floor by exerting a constant horizontal force of 40 N. How much total work is performed on the box by the student?",
    options: ["8 Joules", "35 Joules", "45 Joules", "200 Joules"],
    correctAnswer: "D",
    explanation: "Work done by a constant force parallel to the displacement is calculated using W = F * d. Substituting the given values yields W = (40 N) * (5.0 m) = 200 Joules."
  },
  {
    id: "AP001-Q0071",
    course: "AP Physics 1",
    unit: "Linear Momentum",
    difficulty: "Medium",
    question: "A 3-kg block traveling horizontally to the right at 4 m/s undergoes a completely inelastic collision with a 1-kg block that is moving horizontally to the left at 2 m/s. What is the final speed of the two blocks after they stick together?",
    options: ["1.5 m/s", "2.0 m/s", "2.5 m/s", "3.5 m/s"],
    correctAnswer: "C",
    explanation: "Defining rightward motion as positive: m_1 = 3 kg, v_1 = +4 m/s; m_2 = 1 kg, v_2 = -2 m/s. Total initial momentum is p_i = (3)(4) + (1)(-2) = 12 - 2 = 10 kg*m/s. By conservation of momentum, p_i = (m_1 + m_2) * v_f -> 10 = (3 + 1) * v_f -> 10 = 4 * v_f -> v_f = 2.5 m/s."
  },
  {
    id: "AP001-Q0038",
    course: "AP Physics 1",
    unit: "Oscillations",
    difficulty: "Easy",
    question: "A physical system undergoes simple harmonic motion. If the total time required for the system to execute exactly 20 complete back-and-forth cycles is 10 seconds, what is the frequency of the oscillation?",
    options: "0.5 Hz", "1.0 Hz", "2.0 Hz", "20 Hz"],
    correctAnswer: "C",
    explanation: "Frequency f is defined as the total number of cycles completed per unit of time: f = Cycles / Time. Substituting the given values gives f = 20 cycles / 10 seconds = 2.0 Hz."
  },
  {
    id: "AP001-Q0163",
    course: "AP Physics 1",
    unit: "Work, Energy, and Power",
    difficulty: "Hard",
    question: "A block of mass m is released from rest at the top of a rough incline of length L and inclination angle theta. As the block slides down, it experiences a constant kinetic friction force of magnitude f. What is the total kinetic energy of the block when it reaches the absolute bottom of the incline?",
    options: ["m * g * L * sin(theta)", "m * g * L * cos(theta) - f * L", "m * g * L * sin(theta) - f * L", "m * g * L * sin(theta) + f * L"],
    correctAnswer: "C",
    explanation: "By the work-energy theorem, the net work done on an object equals its change in kinetic energy: W_net = Delta_K. The forces acting parallel to the track are the component of gravity pulling downward (m * g * sin(theta)) and the opposing friction force (f). The net force is F_net = m * g * sin(theta) - f. The work done over distance L is W_net = (m * g * sin(theta) - f) * L = m * g * L * sin(theta) - f * L. Since it started from rest, this expression equals the final kinetic energy."
  },
  {
    id: "AP001-Q0067",
    course: "AP Physics 1",
    unit: "Force and Translational Dynamics",
    difficulty: "Medium",
    question: "A heavy box of mass M is being pulled across a rough horizontal floor by a light string that exerts a tension force T at an angle theta above the horizontal. If the box moves at a constant velocity, what is the coefficient of kinetic friction between the box and the floor?",
    options: ["T * cos(theta) / (M*g)", "T * cos(theta) / (M*g - T * sin(theta))", "T * sin(theta) / (M*g - T * cos(theta))", "T * cos(theta) / (M*g + T * sin(theta))"],
    correctAnswer: "B",
    explanation: "Since the box moves at a constant velocity, the net horizontal and vertical forces must balance out to zero. Horizontally: T * cos(theta) - f_k = 0 -> f_k = T * cos(theta). Vertically: F_N + T * sin(theta) - M*g = 0 -> F_N = M*g - T * sin(theta). Kinetic friction is defined as f_k = mu_k * F_N. Substituting our expressions: T * cos(theta) = mu_k * (M*g - T * sin(theta)). Solving for the coefficient yields mu_k = T * cos(theta) / (M*g - T * sin(theta))."
  },
  {
    id: "AP001-Q0077",
    course: "AP Physics 1",
    unit: "Linear Momentum",
    difficulty: "Medium",
    question: "A steady stream of high-velocity water droplets strikes a flat metal plate perpendicularly and bounces back elastically with identical speed. If the mass flow rate of the incoming water is R (in kg/s) and the speed of the droplets is v, what is the magnitude of the average force exerted on the plate by the stream?",
    options: ["0.5 * R * v", "R * v", "2 * R * v", "R * v^2"],
    correctAnswer: "C",
    explanation: "According to Newton's second law, average force is equal to the rate of change of momentum: F = Delta_p / Delta_t. For each mass m striking the plate at speed v and bouncing back at speed v in the opposite direction, the change in velocity is Delta_v = v - (-v) = 2v, so Delta_p = 2 * m * v. Over a time interval, the force is F = (Delta_m / Delta_t) * 2v = R * 2v = 2 * R * v."
  },
  {
    id: "AP001-Q0010",
    course: "AP Physics 1",
    unit: "Kinematics",
    difficulty: "Easy",
    question: "A small pebble is dropped from rest from a bridge located 20 meters above a river. How long does it take for the pebble to strike the surface of the water below? (Assume g = 10 m/s^2)",
    options: ["1.0 second", "2.0 seconds", "4.0 seconds", "5.0 seconds"],
    correctAnswer: "B",
    explanation: "Using the kinematic equation delta_y = v_i * t + 0.5 * a * t^2 with v_i = 0, we get 20 = 0.5 * (10) * t^2 -> 20 = 5 * t^2 -> t^2 = 4 -> t = 2.0 seconds."
  },
  {
    id: "AP001-Q0194",
    course: "AP Physics 1",
    unit: "Oscillations",
    difficulty: "Medium",
    question: "A simple pendulum has an initial period of oscillation T on Earth. If the length of the pendulum string is cut exactly in half (0.5 * L), what is the new period of oscillation?",
    options: ["0.25 * T", "0.50 * T", "T / sqrt(2)", "sqrt(2) * T"],
    correctAnswer: "C",
    explanation: "The period of a simple pendulum is given by T = 2 * pi * sqrt(L / g). Since period is directly proportional to the square root of the length, cutting the length in half scales the period by a factor of sqrt(0.5) = 1 / sqrt(2). Therefore, the new period is T / sqrt(2)."
  },
  {
    id: "AP001-Q0059",
    course: "AP Physics 1",
    unit: "Force and Translational Dynamics",
    difficulty: "Medium",
    question: "A block of mass m is placed on a smooth, frictionless inclined plane that makes an angle theta with the horizontal. What is the magnitude of the normal force exerted on the block by the inclined surface?",
    options: ["m * g", "m * g * sin(theta)", "m * g * cos(theta)", "m * g * tan(theta)"],
    correctAnswer: "C",
    explanation: "Choosing a coordinate system where the y-axis is perpendicular to the inclined plane, there is no acceleration along this perpendicular line. Therefore, the upward normal force F_N must perfectly balance the perpendicular component of the gravitational weight vector, which is m * g * cos(theta)."
  },
  {
    id: "AP001-Q0159",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Medium",
    question: "An ideal fluid flows through a horizontal pipe. At a certain point where the pipe cross-sectional area is A, the fluid speed is v. If the pipe narrows to an area of 0.25*A, what is the fluid speed in this narrow section?",
    options: ["0.25 * v", "0.50 * v", "2 * v", "4 * v"],
    correctAnswer: "D",
    explanation: "According to the continuity equation for an incompressible fluid, A_1 * v_1 = A_2 * v_2. Substituting the given values gives A * v = (0.25 * A) * v_2. Canceling area A and solving for the final speed yields v_2 = v / 0.25 = 4 * v."
  },
  {
    id: "AP001-Q0131",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Medium",
    question: "A uniform solid cylinder and a uniform thin spherical shell have the same mass M and radius R. If both are released from rest at the top of the same rough incline and roll down without slipping, which object reaches the bottom first?",
    options: ["The solid cylinder reaches the bottom first.", "The spherical shell reaches the bottom first.", "Both objects reach the bottom at the exact same time.", "It depends on the angle of the incline."],
    correctAnswer: "A",
    explanation: "The rotational inertia of a solid cylinder is I = 0.5*M*R^2, while that of a thin spherical shell is I = (2/3)*M*R^2. Since the cylinder has a smaller rotational inertia coefficient, it resists rotational acceleration less. Therefore, a larger fraction of its initial potential energy is converted into translational kinetic energy, giving it a higher linear acceleration and speed down the incline."
  },
  {
    id: "AP001-Q0173",
    course: "AP Physics 1",
    unit: "Oscillations",
    difficulty: "Hard",
    question: "A block-spring system with a mass m and spring constant k is oscillating on a frictionless horizontal floor with an amplitude A. What is the magnitude of the velocity of the block when its displacement from equilibrium is exactly equal to half of its amplitude (x = 0.5 * A)?",
    options: ["0.5 * sqrt(k/m) * A", "0.5 * sqrt(3k/m) * A", "sqrt(k/m) * A", "0.25 * sqrt(k/m) * A"],
    correctAnswer: "B",
    explanation: "By conservation of mechanical energy, 0.5 * k * A^2 = 0.5 * m * v^2 + 0.5 * k * x^2. Substituting x = 0.5 * A yields 0.5 * k * A^2 = 0.5 * m * v^2 + 0.5 * k * (0.25 * A^2). Subtracting potential energy gives 0.375 * k * A^2 = 0.5 * m * v^2 -> (3/8) * k * A^2 = (1/2) * m * v^2 -> v^2 = (3/4) * (k/m) * A^2. Taking the square root gives v = 0.5 * sqrt(3k/m) * A."
  },
  {
    id: "AP001-Q0114",
    course: "AP Physics 1",
    unit: "Force and Translational Dynamics",
    difficulty: "Medium",
    question: "A block of mass m is pushed against a rough vertical wall by a horizontal force F. If the block remains stationary, what is the magnitude and direction of the static friction force exerted on the block by the wall?",
    options: ["Equal to F, directed upward", "Equal to mg, directed upward", "Equal to mu_s * F, directed upward", "Equal to mg, directed downward"],
    correctAnswer: "B",
    explanation: "Since the block remains completely stationary, the net vertical force must sum to zero. The only vertical forces acting on the block are the downward force of gravity (mg) and the upward force of static friction. Therefore, the static friction force must be exactly equal to mg in magnitude and directed upward to balance gravity."
  },
  {
    id: "AP001-Q0025",
    course: "AP Physics 1",
    unit: "Linear Momentum",
    difficulty: "Easy",
    question: "A 10-kg cart is moving horizontally at a constant velocity of 4 m/s. What is the magnitude of the linear momentum of the cart?",
    options: ["2.5 kg*m/s", "14 kg*m/s", "40 kg*m/s", "80 kg*m/s"],
    correctAnswer: "C",
    explanation: "Linear momentum is calculated using the formula p = m * v. Substituting the given values gives p = (10 kg) * (4 m/s) = 40 kg*m/s."
  },
  {
    id: "AP001-Q0021",
    course: "AP Physics 1",
    unit: "Work, Energy, and Power",
    difficulty: "Easy",
    question: "A 4.0-kg object is moving at a speed of 5.0 m/s. What is the kinetic energy of this object?",
    options: ["10 J", "20 J", "50 J", "100 J"],
    correctAnswer: "C",
    explanation: "Kinetic energy is calculated using the formula K = 0.5 * m * v^2. Substituting the given values gives K = 0.5 * (4.0 kg) * (5.0 m/s)^2 = 2.0 * 25 = 50 Joules."
  },
  {
    id: "AP001-Q0162",
    course: "AP Physics 1",
    unit: "Work, Energy, and Power",
    difficulty: "Hard",
    question: "A particle of mass m moves along the x-axis under the influence of a conservative force field where its potential energy function is given by U(x) = bx^2 - cx, where b and c are positive constants. At what position x is the particle in a state of stable equilibrium?",
    options: ["x = 0", "x = c / b", "x = c / (2b)", "x = 2c / b"],
    correctAnswer: "C",
    explanation: "An object is in equilibrium where the net force is zero. The relation between force and a potential energy function is F = -dU/dx. Differentiating U(x) gives dU/dx = 2bx - c, so F = -(2bx - c) = c - 2bx. Setting the force equal to zero to find equilibrium: c - 2bx = 0 -> 2bx = c -> x = c / (2b). Because the second derivative of U is positive (2b), this represents a local minimum, corresponding to stable equilibrium."
  },
  {
    id: "AP001-Q0020",
    course: "AP Physics 1",
    unit: "Work, Energy, and Power",
    difficulty: "Easy",
    question: "A 2.0-kg textbook is lifted vertically from the floor onto a desk that is 1.5 meters high. What is the change in the gravitational potential energy of the textbook-Earth system? (Assume g = 10 m/s^2)",
    options: ["3.0 J", "13 J", "30 J", "45 J"],
    correctAnswer: "C",
    explanation: "The change in gravitational potential energy is given by Delta_U = m * g * h. Substituting the given values gives Delta_U = (2.0 kg) * (10 m/s^2) * (1.5 m) = 30 Joules."
  },
  {
    id: "AP001-Q0119",
    course: "AP Physics 1",
    unit: "Force and Translational Dynamics",
    difficulty: "Medium",
    question: "A box of mass m is placed on a rough horizontal surface with a static friction coefficient mu_s and a kinetic friction coefficient mu_k. A horizontal pulling force F is applied to the box. If the box accelerates forward, what is the magnitude of the net horizontal force acting on the box?",
    options: ["F - mu_s * m * g", "F - mu_k * m * g", "F", "mu_k * m * g"],
    correctAnswer: "B",
    explanation: "Because the box is explicitly stated to be accelerating forward, it is in motion. Therefore, the friction force opposing its movement is kinetic friction, which is given by f_k = mu_k * F_N = mu_k * m * g. The net horizontal force is the applied force minus the opposing kinetic friction force: F_net = F - mu_k * m * g."
  },
  {
    id: "AP001-Q0008",
    course: "AP Physics 1",
    unit: "Kinematics",
    difficulty: "Easy",
    question: "A ball is thrown straight upward from ground level with an initial velocity of 20 m/s. What is the maximum height reached by the ball above its launch point? (Assume g = 10 m/s^2 and neglect air resistance)",
    options: ["10 meters", "20 meters", "40 meters", "80 meters"],
    correctAnswer: "B",
    explanation: "At the maximum height, the final vertical velocity is zero (v_f = 0). Using the kinematic formula v_f^2 = v_i^2 - 2 * g * delta_y, we get 0 = (20)^2 - 2 * (10) * delta_y -> 0 = 400 - 20 * delta_y -> 20 * delta_y = 400 -> delta_y = 20 meters."
  },
  {
    id: "AP001-Q0011",
    course: "AP Physics 1",
    unit: "Force and Translational Dynamics",
    difficulty: "Easy",
    question: "An object of mass 5.0 kg experiences a single net horizontal force of 20 N. What is the magnitude of the acceleration of the object?",
    options: ["0.25 m/s^2", "4.0 m/s^2", "25 m/s^2", "100 m/s^2"],
    correctAnswer: "B",
    explanation: "According to Newton's second law, acceleration is equal to the net force divided by the mass (a = F_net / m). Substituting the values: a = 20 N / 5.0 kg = 4.0 m/s^2."
  },
  {
    id: "AP001-Q0066",
    course: "AP Physics 1",
    unit: "Force and Translational Dynamics",
    difficulty: "Medium",
    question: "A block of mass m is placed on a rough horizontal surface. A horizontal force F is applied to the block, causing it to accelerate at a rate of a. If the applied force is doubled to 2F while keeping the friction force constant, what is the new acceleration of the block?",
    options: ["Exactly 2a", "Greater than 2a", "Less than 2a", "Exactly a"],
    correctAnswer: "B",
    explanation: "From Newton's second law, the initial acceleration is given by a = (F - f) / m -> m*a = F - f. When the force is doubled, the new acceleration is a_new = (2F - f) / m. We can rewrite this as a_new = (2F - 2f + f) / m = 2*(F - f)/m + f/m = 2a + f/m. Because the friction force term f/m is positive, the new acceleration is strictly greater than 2a."
  },
  {
    id: "AP001-Q0153",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Hard",
    question: "An ice skater spins at an initial angular velocity omega_0 with their arms extended. When the skater pulls their arms close to their body, their rotational inertia decreases to exactly one-third of its initial value (I_f = I_0 / 3). What is the ratio of the final kinetic energy of the skater to their initial kinetic energy?",
    options: ["1/3", "1", "3", "9"],
    correctAnswer: "C",
    explanation: "Since there are no external torques acting on the skater, angular momentum is conserved: I_0 * omega_0 = I_f * omega_f. Substituting I_f = I_0 / 3 gives I_0 * omega_0 = (I_0 / 3) * omega_f -> omega_f = 3 * omega_0. The initial kinetic energy is K_0 = 0.5 * I_0 * omega_0^2. The final kinetic energy is K_f = 0.5 * I_f * omega_f^2 = 0.5 * (I_0 / 3) * (3 * omega_0)^2 = 0.5 * (I_0 / 3) * 9 * omega_0^2 = 3 * (0.5 * I_0 * omega_0^2) = 3 * K_0. Thus, the ratio K_f / K_0 is 3."
  },
  {
    id: "AP001-Q0203",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Easy",
    question: "A standard barometer measures atmospheric pressure at sea level to be approximately 101,300 Pa. If the cross-sectional area of the top surface of a laboratory desk is 2.0 m^2, what is the magnitude of the downward force exerted on the desk by the atmosphere?",
    options: ["50,650 N", "101,300 N", "202,600 N", "405,200 N"],
    correctAnswer: "C",
    explanation: "Pressure is defined as force divided by area (P = F / A), which means force is equal to pressure times area (F = P * A). Substituting the given values yields F = (101,300 Pa) * (2.0 m^2) = 202,600 N."
  },
  {
    id: "AP001-Q0087",
    course: "AP Physics 1",
    unit: "Linear Momentum",
    difficulty: "Medium",
    question: "An open railroad car of mass M rolls horizontally with a constant speed v under a vertical grain hopper. Grain is dropped vertically into the car at a constant mass rate R (in kg/s). What horizontal force must be applied to the car to keep it moving at the constant speed v?",
    options: ["Zero", "R * v", "2 * R * v", "M * g"],
    correctAnswer: "B",
    explanation: "According to Newton's second law written in terms of momentum, F = dp/dt. Since the speed v is kept constant while the mass changes as grain falls into it, F = d(m*v)/dt = v * (dm/dt). The rate of change of mass is dm/dt = R, so the required horizontal force to maintain the velocity is F = R * v."
  },
  {
    id: "AP001-Q0012",
    course: "AP Physics 1",
    unit: "Force and Translational Dynamics",
    difficulty: "Easy",
    question: "A 60-kg passenger stands on a scale inside an elevator. If the elevator accelerates upward at a constant rate of 2.0 m/s^2, what is the reading on the scale? (Assume g = 10 m/s^2)",
    options: ["120 N", "480 N", "600 N", "720 N"],
    correctAnswer: "D",
    explanation: "Using Newton's second law for the passenger, the net vertical force is F_net = F_N - m * g = m * a, where F_N is the normal force upward from the scale. Rearranging gives F_N = m * g + m * a = m * (g + a). Substituting the given values gives F_N = (60 kg) * (10 + 2.0 m/s^2) = 60 * 12 = 720 N."
  },
  {
    id: "AP001-Q0042",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Easy",
    question: "An object has a mass of 0.30 kg and a volume of 0.0005 m^3. If it is completely submerged in water, what is the magnitude of the buoyant force acting on it? (Take density of water to be 1000 kg/m^3 and g = 10 m/s^2)",
    options: ["3.0 N", "5.0 N", "10 N", "15 N"],
    correctAnswer: "B",
    explanation: "According to Archimedes' principle, the buoyant force equals the weight of the fluid displaced by the object: F_b = rho_fluid * V_sub * g. Substituting the values: F_b = (1000 kg/m^3) * (0.0005 m^3) * (10 m/s^2) = 5.0 N."
  },
  {
    id: "AP001-Q0044",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Easy",
    question: "A rectangular block with dimensions 0.1 m by 0.2 m by 0.5 m has a total mass of 20 kg. What is the maximum pressure this block can exert on a flat horizontal table depending on how it is oriented?",
    options: ["400 Pa", "1,000 Pa", "2,000 Pa", "10,000 Pa"],
    correctAnswer: "D",
    explanation: "Pressure is given by P = F / A. To maximize pressure, the contact surface area must be minimized. The minimum area comes from the two smallest dimensions: A_min = 0.1 m * 0.2 m = 0.02 m^2. The weight force of the block is F = m * g = (20 kg)(10 m/s^2) = 200 N. Thus, P_max = 200 N / 0.02 m^2 = 10,000 Pa."
  },
  {
    id: "AP001-Q0161",
    course: "AP Physics 1",
    unit: "Work, Energy, and Power",
    difficulty: "Hard",
    question: "A force field acting on a particle moving in the xy-plane is given by F = (2y)i + (3x)j. The particle moves from the origin (0,0) to the coordinate point (2,2) along a straight line path defined by y = x. What is the total work done by this force on the particle?",
    options: ["4 J", "8 J", "10 J", "12 J"],
    correctAnswer: "C",
    explanation: "The work done along a path is given by the line integral W = integral(F_x dx + F_y dy) = integral(2y dx + 3x dy). Since the path is the line y = x, we can substitute y = x and dy = dx into the integral: W = integral_0^2 (2x dx + 3x dx) = integral_0^2 (5x dx) = [2.5 * x^2]_0^2 = 2.5 * (2)^2 - 0 = 2.5 * 4 = 10 Joules."
  },
  {
    id: "AP001-Q0003",
    course: "AP Physics 1",
    unit: "Kinematics",
    difficulty: "Easy",
    question: "An object is dropped from rest from the edge of a tall cliff. If air resistance is completely negligible, what is the speed of the object after it has fallen for exactly 4.0 seconds? (Assume g = 10 m/s^2)",
    options: ["2.5 m/s", "10 m/s", "20 m/s", "40 m/s"],
    correctAnswer: "D",
    explanation: "Using the kinematic formula for an object dropped from rest (v_i = 0): v_f = v_i + g * t = 0 + (10 m/s^2) * (4.0 s) = 40 m/s."
  },
  {
    id: "AP001-Q0109",
    course: "AP Physics 1",
    unit: "Kinematics",
    difficulty: "Medium",
    question: "A motorboat crosses a river that flows with a steady current speed of 3.0 m/s due East. The boat steers straight North relative to the water at a constant speed of 4.0 m/s. What is the magnitude of the boat's resultant velocity relative to a stationary observer on the riverbank?",
    options: ["1.0 m/s", "5.0 m/s", "7.0 m/s", "12 m/s"],
    correctAnswer: "B",
    explanation: "The horizontal velocity component is v_x = 3.0 m/s (East) and the vertical velocity component is v_y = 4.0 m/s (North). Because these components are perpendicular, the magnitude of the resultant velocity vector is calculated using the Pythagorean theorem: v = sqrt(v_x^2 + v_y^2) = sqrt(3.0^2 + 4.0^2) = sqrt(9 + 16) = sqrt(25) = 5.0 m/s."
  },
  {
    id: "AP001-Q0143",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Medium",
    question: "A heavy metallic object has a weight of 15 N when measured in air using a spring scale. When the object is completely lowered and submerged in water, the scale reading drops down to 11 N. What is the density of this metal? (Take the density of water to be 1000 kg/m^3)",
    options: ["1500 kg/m^3", "2750 kg/m^3", "3750 kg/m^3", "4000 kg/m^3"],
    correctAnswer: "C",
    explanation: "The buoyant force acting on the object is F_b = W_air - W_submerged = 15 N - 11 N = 4 N. Since F_b = rho_water * V * g, we can express the volume of the object as V = F_b / (rho_water * g). The mass of the object is m = W_air / g. Therefore, the density of the metal is rho_metal = m / V = (W_air / g) / [F_b / (rho_water * g)] = (W_air / F_b) * rho_water = (15 / 4) * 1000 = 3.75 * 1000 = 3750 kg/m^3."
  },
  {
    id: "AP001-Q0005",
    course: "AP Physics 1",
    unit: "Kinematics",
    difficulty: "Easy",
    question: "A high-speed train travels along a straight stretch of track with a constant velocity of 40 m/s. How much total distance does the train cover during a time interval of 30 seconds?",
    options: ["1.33 meters", "70 meters", "120 meters", "1200 meters"],
    correctAnswer: "D",
    explanation: "For motion at a constant velocity, the distance traveled is calculated by multiplying the velocity by the time interval: d = v * t = (40 m/s) * (30 s) = 1200 meters."
  },
  {
    id: "AP001-Q0138",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Medium",
    question: "A solid block has a mass M and a volume V. When placed in a large container filled with liquid X, the block floats with exactly 60% of its total volume submerged below the surface. When placed in liquid Y, it floats with exactly 40% of its volume submerged. What is the ratio of the density of liquid X to the density of liquid Y?",
    options: ["2/3", "3/2", "4/9", "9/4"],
    correctAnswer: "A",
    explanation: "For a floating object, the submerged fraction is equal to the ratio of the object's density to the liquid's density: fraction = rho_obj / rho_liquid. For liquid X, 0.60 = rho_block / rho_X -> rho_X = rho_block / 0.60. For liquid Y, 0.40 = rho_block / rho_Y -> rho_Y = rho_block / 0.40. Taking the ratio gives rho_X / rho_Y = (rho_block / 0.60) / (rho_block / 0.40) = 0.40 / 0.60 = 4/6 = 2/3."
  },
  {
    id: "AP001-Q0164",
    course: "AP Physics 1",
    unit: "Work, Energy, and Power",
    difficulty: "Hard",
    question: "A block of mass m is placed at the top of a smooth, frictionless inclined plane of height h and length L. If the block is released from rest, what is the magnitude of the constant net power delivered to the block by gravity as it slides down the incline?",
    options: ["m * g * h / L", "m * g * sqrt(2gh)", "0.5 * m * g * sqrt(2gh) * (h / L)", "m * g * h * L"],
    correctAnswer: "C",
    explanation: "Power can be calculated using P = F * v * cos(theta). The force of gravity acting parallel to the incline is F = m * g * sin(theta) = m * g * (h / L). Since the acceleration along the frictionless ramp is constant, the average velocity of the block as it slides from rest to a final speed of v_f = sqrt(2gh) is v_avg = 0.5 * v_f = 0.5 * sqrt(2gh). The average power delivered over the duration of the slide is P = F * v_avg = [m * g * (h / L)] * [0.5 * sqrt(2gh)] = 0.5 * m * g * sqrt(2gh) * (h / L)."
  },
    {
    id: "AP001-Q0206",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Medium",
    question: "A large hot-air balloon has a total volume V. The density of the cool outside air is rho_air, and the density of the heated air inside the balloon envelope is rho_hot. Neglecting the mass of the fabric and basket, what is the magnitude of the net upward lifting force acting on the balloon at the moment of liftoff?",
    options: ["(rho_air - rho_hot) * V * g", "(rho_air + rho_hot) * V * g", "rho_air * V * g", "(rho_hot - rho_air) * V * g"],
    correctAnswer: "A",
    explanation: "The upward buoyant force equals the weight of the displaced outside air: F_b = rho_air * V * g. The downward weight of the heated gas inside the balloon envelope is W = rho_hot * V * g. The net upward lifting force is F_net = F_b - W = (rho_air - rho_hot) * V * g."
  },
  {
    id: "AP001-Q0073",
    course: "AP Physics 1",
    unit: "Linear Momentum",
    difficulty: "Medium",
    question: "A 2-kg rifle fires a 0.01-kg bullet horizontally at a muzzle velocity of 400 m/s. What is the magnitude of the recoil velocity of the rifle immediately after firing?",
    options: ["2.0 m/s", "4.0 m/s", "8.0 m/s", "40 m/s"],
    correctAnswer: "A",
    explanation: "By conservation of linear momentum, the total momentum of the rifle-bullet system before firing is zero, so it must remain zero after firing: 0 = m_bullet * v_bullet + m_rifle * v_recoil -> 0 = (0.01 kg)(400 m/s) + (2 kg)(v_recoil) -> 0 = 4 + 2 * v_recoil -> 2 * v_recoil = -4 -> v_recoil = -2 m/s. The magnitude of the recoil velocity is 2.0 m/s."
  },
  {
    id: "AP001-Q0033",
    course: "AP Physics 1",
    unit: "Oscillations",
    difficulty: "Easy",
    question: "A basic block-spring system undergoes horizontal simple harmonic motion. If the spring constant of the spring is 400 N/m and the amplitude of the oscillation is 0.2 meters, what is the total mechanical energy of the system?",
    options: ["4 Joules", "8 Joules", "16 Joules", "40 Joules"],
    correctAnswer: "B",
    explanation: "The total mechanical energy of a simple harmonic oscillator is given by E = 0.5 * k * A^2. Substituting the given parameters: E = 0.5 * (400 N/m) * (0.2 m)^2 = 200 * 0.04 = 8 Joules."
  },
  {
    id: "AP001-Q0123",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Medium",
    question: "A uniform solid sphere of mass M and radius R rotates about a fixed frictionless axle passing through its center. If a constant net torque is applied, causing the sphere's angular speed to increase from rest to omega over a time interval t, what is the average power delivered to the sphere? (I = (2/5)M*R^2)",
    options: ["M * R^2 * omega^2 / (5t)", "M * R^2 * omega^2 / t", "2 * M * R^2 * omega^2 / (5t)", "M * R^2 * omega / (5t^2)"],
    correctAnswer: "A",
    explanation: "Average power can be calculated as the change in rotational kinetic energy divided by the time interval: P = Delta_K / t. Since the sphere starts from rest, Delta_K = K_f = 0.5 * I * omega^2. Substituting the rotational inertia I = (2/5) * M * R^2 yields K_f = 0.5 * ((2/5) * M * R^2) * omega^2 = (1/5) * M * R^2 * omega^2. Dividing by time t gives P = M * R^2 * omega^2 / (5t)."
  },
  {
    id: "AP001-Q0056",
    course: "AP Physics 1",
    unit: "Gravitation",
    difficulty: "Medium",
    question: "An astronaut weighs 600 N on the surface of the Earth. If the astronaut travels to a distant planet that has the same mass as Earth but twice the radius, what will be the astronaut's weight on this planet's surface?",
    options: ["150 N", "300 N", "600 N", "1200 N"],
    correctAnswer: "A",
    explanation: "The surface weight (gravitational force) is given by F = G * M * m / R^2, meaning weight is inversely proportional to the square of the planet's radius. Doubling the radius (2R) while keeping the mass constant reduces the gravitational pull by a factor of 2^2 = 4. Thus, the new weight is 600 N / 4 = 150 N."
  },
  {
    id: "AP001-Q0088",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Medium",
    question: "A light, rigid rod of length L is pivoted at its left end and held horizontally. A point mass m is attached to the rod at its midpoint, and a second identical point mass m is attached to its far right end. What is the total rotational inertia of this system about the pivot?",
    options: ["0.5 * m * L^2", "m * L^2", "1.25 * m * L^2", "2 * m * L^2"],
    correctAnswer: "C",
    explanation: "The total rotational inertia of a system of point masses is the sum of m * r^2 for each mass. The first mass is located at r_1 = 0.5 * L, and the second mass is located at r_2 = L. Calculating the sum: I = m * (0.5 * L)^2 + m * (L)^2 = 0.25 * m * L^2 + m * L^2 = 1.25 * m * L^2."
  },
  {
    id: "AP001-Q0035",
    course: "AP Physics 1",
    unit: "Oscillations",
    difficulty: "Easy",
    question: "A simple pendulum executes simple harmonic motion on the surface of the Earth with a period T. If this entire pendulum setup is transported to the Moon, where the acceleration due to gravity is approximately one-sixth of that on Earth, how will the new period of the pendulum compare?",
    options: ["The period will be shorter.", "The period will be longer.", "The period will remain exactly the same.", "The pendulum will cease to oscillate completely."],
    correctAnswer: "B",
    explanation: "The period of a simple pendulum is calculated using T = 2 * pi * sqrt(L / g). Since the gravitational acceleration g is in the denominator, a decrease in g results in an increase in the period of oscillation, making the period longer."
  },
  {
    id: "AP001-Q0069",
    course: "AP Physics 1",
    unit: "Force and Translational Dynamics",
    difficulty: "Medium",
    question: "A block of mass m is held at rest on a rough inclined plane by a static friction force. If the inclination angle theta of the plane is gradually increased, how do the normal force and the static friction force acting on the block change before it begins to slide?",
    options: ["Normal force increases; friction force increases.", "Normal force decreases; friction force increases.", "Normal force increases; friction force decreases.", "Normal force decreases; friction force decreases."],
    correctAnswer: "B",
    explanation: "For a block held in static equilibrium on an incline, balancing forces gives: Normal force F_N = m * g * cos(theta) and Static friction force f_s = m * g * sin(theta). As the angle theta increases from 0 toward 90 degrees, cos(theta) decreases (causing the normal force to decrease) and sin(theta) increases (causing the static friction force to increase)."
  },
  {
    id: "AP001-Q0092",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Medium",
    question: "A uniform thin hoop of mass M and radius R rolls horizontally along a flat floor without slipping at a constant linear speed v. What fraction of the hoop's total mechanical kinetic energy is in the form of rotational kinetic energy?",
    options: ["1/4", "1/3", "1/2", "2/3"],
    correctAnswer: "C",
    explanation: "The rotational inertia of a thin hoop is I = M * R^2. Translational kinetic energy is K_trans = 0.5 * M * v^2. Rotational kinetic energy is K_rot = 0.5 * I * omega^2 = 0.5 * (M * R^2) * (v / R)^2 = 0.5 * M * v^2. The total kinetic energy is K_total = K_trans + K_rot = 0.5 * M * v^2 + 0.5 * M * v^2 = M * v^2. The fraction that is rotational is K_rot / K_total = (0.5 * M * v^2) / (M * v^2) = 1/2."
  },
  {
    id: "AP001-Q0022",
    course: "AP Physics 1",
    unit: "Work, Energy, and Power",
    difficulty: "Easy",
    question: "A block of mass m slides down a completely frictionless inclined plane from an initial vertical height h. What is the linear speed of the block when it reaches the absolute bottom of the incline?",
    options: ["g * h", "sqrt(g * h)", "sqrt(2 * g * h)", "2 * g * h"],
    correctAnswer: "C",
    explanation: "By conservation of mechanical energy, the initial gravitational potential energy at the top is completely converted into translational kinetic energy at the bottom: m * g * h = 0.5 * m * v^2. Canceling mass m and solving for speed gives v^2 = 2 * g * h -> v = sqrt(2 * g * h)."
  },
  {
    id: "AP001-Q0105",
    course: "AP Physics 1",
    unit: "Gravitation",
    difficulty: "Medium",
    question: "A satellite orbits a planet in a stable circular path of radius R. If the orbital speed of the satellite is v, what is the mass of the planet?",
    options: ["v^2 * R / G", "v * R^2 / G", "v^2 / (G * R)", "G * v^2 / R"],
    correctAnswer: "A",
    explanation: "For a satellite in a circular orbit, the gravitational force provides the necessary centripetal force: G * M_planet * m_sat / R^2 = m_sat * v^2 / R. Canceling the satellite mass m_sat and one factor of radius R gives G * M_planet / R = v^2. Solving for the planet's mass yields M_planet = v^2 * R / G."
  },
  {
    id: "AP001-Q0127",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Medium",
    question: "A particle of mass m is moving in a horizontal circular path of radius R with a constant angular speed omega. What is the magnitude of the angular momentum of this particle about the center of its circular track?",
    options: ["m * R * omega", "m * R^2 * omega", "m * R * omega^2", "m^2 * R * omega"],
    correctAnswer: "B",
    explanation: "The angular momentum of a point particle rotating about a central axis can be expressed using L = I * omega. The rotational inertia of a point mass at a distance R is I = m * R^2. Substituting this expression gives L = (m * R^2) * omega = m * R^2 * omega."
  },
  {
    id: "AP001-Q0180",
    course: "AP Physics 1",
    unit: "Oscillations",
    difficulty: "Hard",
    question: "A block-spring system undergoes simple harmonic motion horizontally. If the position of the block as a function of time is given by x(t) = A * cos(omega * t), at what positive time t after t = 0 does the block first reach its maximum speed?",
    options: ["t = pi / (2 * omega)", "t = pi / omega", "t = 3 * pi / (2 * omega)", "t = 2 * pi / omega"],
    correctAnswer: "A",
    explanation: "The block starts at maximum displacement x(0) = A, where its speed is zero. In simple harmonic motion, maximum speed occurs as the block passes through the equilibrium position (x = 0). Setting x(t) = 0 gives A * cos(omega * t) = 0 -> cos(omega * t) = 0. The first positive solution occurs when the phase angle equals pi/2: omega * t = pi / 2 -> t = pi / (2 * omega)."
  },
  {
    id: "AP001-Q0149",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Hard",
    question: "A solid wooden block floats at the interface between air and water in a sealed container, with exactly 70% of its volume submerged in the water. If air is pumped into the container to double the atmospheric pressure above the liquid surface, what happens to the submerged volume fraction of the block?",
    options: ["It increases slightly.", "It decreases slightly.", "It remains exactly the same.", "The block sinks completely to the bottom."],
    correctAnswer: "B",
    explanation: "When the air pressure is increased, the density of the air increases. The block experiences a buoyant force from both the water and the surrounding air: F_b,total = rho_water * V_sub * g + rho_air * (V_total - V_sub) * g = m * g. Because the density of the air (rho_air) has increased, the air provides a slightly larger upward buoyant contribution, which means the volume submerged in the water (V_sub) must decrease slightly to maintain static equilibrium."
  },
  {
    id: "AP001-Q0061",
    course: "AP Physics 1",
    unit: "Force and Translational Dynamics",
    difficulty: "Medium",
    question: "A crate of mass m rests on a flat horizontal conveyor belt. If the conveyor belt begins to accelerate forward at a constant rate a without causing the crate to slip, what is the magnitude and direction of the friction force acting on the crate?",
    options: ["Zero", "m * a, directed backward", "m * a, directed forward", "mu_s * m * g, directed forward"],
    correctAnswer: "C",
    explanation: "Since the crate accelerates forward alongside the conveyor belt, there must be a net forward horizontal force acting on it according to Newton's second law (F_net = m * a). The only horizontal force acting on the crate is static friction from the belt. Therefore, the static friction force must have a magnitude of exactly m * a and be directed forward."
  },
  {
    id: "AP001-Q0165",
    course: "AP Physics 1",
    unit: "Work, Energy, and Power",
    difficulty: "Hard",
    question: "A small object of mass m is attached to a light, rigid rod of length L and is swung in a vertical circle. What is the critical minimum speed the object must have at the absolute top of its circular path to successfully complete the loop?",
    options: ["Zero", "sqrt(g * L)", "sqrt(2 * g * L)", "sqrt(5 * g * L)"],
    correctAnswer: "A",
    explanation: "Unlike an object attached to a flexible string (which goes slack if tension drops to zero), a rigid rod can provide an upward supporting normal force to counter gravity. Therefore, the object does not require a minimum speed to maintain its circular path at the top; it only needs enough energy to reach the top point, meaning the critical minimum speed at the absolute top is zero."
  },
  {
    id: "AP001-Q0101",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Medium",
    question: "A rigid horizontal bar of length L and negligible mass is pivoted at its left end. A upward vertical force F is applied at a distance of 0.75*L from the pivot. What is the magnitude of the torque exerted on the bar?",
    options: ["0.25 * F * L", "0.50 * F * L", "0.75 * F * L", "F * L"],
    correctAnswer: "C",
    explanation: "Torque is defined as the product of the lever arm distance and the perpendicular force component applied: tau = F_perp * r. Since the force is vertical and the bar is horizontal, they are perpendicular. The distance from the pivot is r = 0.75*L, giving a torque magnitude of 0.75 * F * L."
  },
  {
    id: "AP001-Q0154",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Hard",
    question: "A uniform thin rod of mass M and length L is free to rotate in a horizontal plane around a fixed frictionless vertical pivot passing through its midpoint. Two small point masses, each of mass m, are clamped to the two outer ends of the rod. What is the total rotational inertia of this assembly? (I_rod = (1/12)M*L^2)",
    options: ["(1/12) * M * L^2 + 0.5 * m * L^2", "(1/12) * M * L^2 + m * L^2", "(1/3) * M * L^2 + 2 * m * L^2", "(1/12) * (M + m) * L^2"],
    correctAnswer: "A",
    explanation: "The total rotational inertia is the sum of the rod's inertia and the point masses' inertias. The rod is pivoted at its center, so I_rod = (1/12) * M * L^2. Each point mass m is located at a distance of r = 0.5 * L away from the center pivot. Adding them together: I_total = (1/12) * M * L^2 + m * (0.5 * L)^2 + m * (0.5 * L)^2 = (1/12) * M * L^2 + 0.25 * m * L^2 + 0.25 * m * L^2 = (1/12) * M * L^2 + 0.5 * m * L^2."
  },
  {
    id: "AP001-Q0026",
    course: "AP Physics 1",
    unit: "Linear Momentum",
    difficulty: "Easy",
    question: "A 2.0-kg block is moving horizontally at 3.0 m/s when it undergoes a perfectly elastic collision with a rigid wall. If the block bounces straight back with no loss of speed, what is the magnitude of the change in momentum of the block?",
    options: ["Zero", "6.0 kg*m/s", "12 kg*m/s", "24 kg*m/s"],
    correctAnswer: "C",
    explanation: "Defining the incoming direction as positive: p_i = m * v_i = (2.0 kg)(+3.0 m/s) = +6.0 kg*m/s. Since the collision is perfectly elastic against a wall, it moves in the opposite direction with the same speed: p_f = m * v_f = (2.0 kg)(-3.0 m/s) = -6.0 kg*m/s. The change in momentum is Delta_p = p_f - p_i = -6.0 - 6.0 = -12 kg*m/s, giving a magnitude of 12 kg*m/s."
  },
  {
    id: "AP001-Q0095",
    course: "AP Physics 1",
    unit: "Gravitation",
    difficulty: "Medium",
    question: "A communication satellite is in a stable circular orbit around Earth with an orbital radius R and a period T. If a different satellite is placed in a stable circular orbit with a radius of 2R, what will be its orbital period?",
    options: ["sqrt(2) * T", "2 * T", "2 * sqrt(2) * T", "4 * T"],
    correctAnswer: "C",
    explanation: "According to Kepler's third law, the square of the orbital period is directly proportional to the cube of the orbital radius (T^2 proportional to R^3), which means T proportional to R^(3/2). Increasing the radius by a factor of 2 scales the period by a factor of 2^(3/2) = 2 * sqrt(2), resulting in a period of 2 * sqrt(2) * T."
  },
  {
    id: "AP001-Q0137",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Medium",
    question: "A uniform solid disk of mass M and radius R rolls horizontally without slipping at a linear speed v. What fraction of the disk's total mechanical kinetic energy is in the form of translational kinetic energy? (The rotational inertia of a solid disk is I = (1/2) * M * R^2)",
    options: ["1/3", "1/2", "2/3", "3/4"],
    correctAnswer: "C",
    explanation: "Translational kinetic energy is K_trans = 0.5 * M * v^2. Rotational kinetic energy is K_rot = 0.5 * I * omega^2 = 0.5 * (0.5 * M * R^2) * (v / R)^2 = 0.25 * M * v^2. The total kinetic energy is K_total = K_trans + K_rot = 0.5 * M * v^2 + 0.25 * M * v^2 = 0.75 * M * v^2 = (3/4) * M * v^2. The translational fraction is K_trans / K_total = (0.5 * M * v^2) / (0.75 * M * v^2) = 2/3."
  },
  {
    id: "AP001-Q0151",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Hard",
    question: "A professional figure skater spins on ice with their arms drawn tight against their chest. If the skater suddenly extends their arms fully outward, how do their angular momentum and rotational kinetic energy change? (Neglect any friction from the ice surface)",
    options: ["Angular momentum remains the same; kinetic energy decreases.", "Angular momentum remains the same; kinetic energy increases.", "Angular momentum increases; kinetic energy decreases.", "Angular momentum decreases; kinetic energy decreases."],
    correctAnswer: "A",
    explanation: "Because there are no net external torques acting on the skater, their angular momentum remains perfectly conserved. Extending the arms outwards moves mass further away from the axis of rotation, increasing the skater's rotational inertia (I). To keep L = I * omega constant, the angular velocity (omega) must decrease. Rotational kinetic energy is K = 0.5 * L * omega. Since L is constant and omega decreases, the kinetic energy decreases."
  },
  {
    id: "AP001-Q0193",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Medium",
    question: "A high-diver spins in mid-air in a tight tuck position with a rotational inertia I_tuck and an angular speed omega_tuck. Just before entering the water, the diver straightens out into a fully extended layout position, increasing their rotational inertia to 3*I_tuck. What is the diver's new angular speed?",
    options: ["3 * omega_tuck", "omega_tuck", "omega_tuck / 2", "omega_tuck / 3"],
    correctAnswer: "D",
    explanation: "Since no external torques act on the diver in mid-air, angular momentum is strictly conserved: L_initial = L_final -> I_tuck * omega_tuck = I_layout * omega_layout. Substituting I_layout = 3 * I_tuck yields I_tuck * omega_tuck = (3 * I_tuck) * omega_layout. Canceling I_tuck gives omega_layout = omega_tuck / 3."
  },
  {
    id: "AP001-Q0150",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Hard",
    question: "A block floats in a beaker of water with a certain percentage of its volume submerged. If the entire beaker-block system is placed inside an elevator that accelerates vertically upward at a constant rate a, what happens to the submerged volume fraction of the block?",
    options: ["It increases.", "It decreases.", "It remains exactly the same.", "The block sinks completely to the bottom."],
    correctAnswer: "C",
    explanation: "For a floating object, the submerged fraction is determined by the ratio of densities: V_sub / V_total = rho_obj / rho_fluid. When the elevator accelerates upward, the effective acceleration due to gravity changes from g to (g + a). This increases both the weight force of the block and the pressure-driven buoyant force of the fluid by the exact same scaling factor, leaving the submerged volume fraction completely unchanged."
  },
  {
    id: "AP001-Q0113",
    course: "AP Physics 1",
    unit: "Kinematics",
    difficulty: "Medium",
    question: "A rocket is launched straight upward from rest with a constant acceleration of 4.0 m/s^2. After 5.0 seconds of flight, the engines suddenly fail completely. What is the maximum vertical height reached by the rocket above its initial launch pad? (Assume g = 10 m/s^2)",
    options: ["50 meters", "70 meters", "90 meters", "110 meters"],
    correctAnswer: "B",
    explanation: "Phase 1 (with engines): height reached is y_1 = 0.5 * a * t^2 = 0.5(4.0)(5.0)^2 = 50 meters. The upward velocity at engine failure is v = a * t = (4.0)(5.0) = 20 m/s. Phase 2 (coasting upward under gravity): the additional height gained before stopping is y_2 = v^2 / (2 * g) = 20^2 / (2 * 10) = 400 / 20 = 20 meters. Total maximum vertical height is y_total = y_1 + y_2 = 50 + 20 = 70 meters."
  },
    {
    id: "AP001-Q0201",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Easy",
    question: "A simple wooden block has a volume of 0.002 m^3 and a uniform density of 600 kg/m^3. What is the total mass of this block?",
    options: ["0.3 kg", "1.2 kg", "3.0 kg", "12 kg"],
    correctAnswer: "B",
    explanation: "Mass is calculated by multiplying density by volume (m = rho * V). Substituting the given values yields m = (600 kg/m^3) * (0.002 m^3) = 1.2 kg."
  },
  {
    id: "AP001-Q0001",
    course: "AP Physics 1",
    unit: "Kinematics",
    difficulty: "Easy",
    question: "A toy car travels a total distance of 20 meters along a straight track in a time of 4 seconds. What is the average speed of the toy car?",
    options: ["2 m/s", "4 m/s", "5 m/s", "80 m/s"],
    correctAnswer: "C",
    explanation: "Average speed is calculated by dividing the total distance traveled by the total time taken: v = d / t = 20 m / 4 s = 5 m/s."
  },
  {
    id: "AP001-Q0188",
    course: "AP Physics 1",
    unit: "Oscillations",
    difficulty: "Hard",
    question: "A simple pendulum of length L has an initial period T on Earth. If the length of the pendulum string is quadrupled to 4L while it is moved to a planet with a local gravitational acceleration of 0.25g, what is its new period of oscillation?",
    options: ["T", "2T", "4T", "16T"],
    correctAnswer: "C",
    explanation: "The period of a simple pendulum is T = 2 * pi * sqrt(L / g). With the new values, T_new = 2 * pi * sqrt((4L) / (0.25g)) = 2 * pi * sqrt(16 * L / g) = 4 * (2 * pi * sqrt(L / g)) = 4T."
  },
  {
    id: "AP001-Q0193",
    course: "AP Physics 1",
    unit: "Oscillations",
    difficulty: "Medium",
    question: "A block-spring system with mass m and spring constant k executes simple harmonic motion along a horizontal frictionless track. If the amplitude of the motion is cut exactly in half (0.5 * A), how do the period T and the maximum speed v_max change?",
    options: ["Period is unchanged; maximum speed is cut in half.", "Period is cut in half; maximum speed is cut in half.", "Period is unchanged; maximum speed is unchanged.", "Period is doubled; maximum speed is cut in half."],
    correctAnswer: "A",
    explanation: "The period of a block-spring system is T = 2 * pi * sqrt(m / k), which is completely independent of the amplitude, so it remains unchanged. The maximum velocity is v_max = omega * A = sqrt(k / m) * A. Since v_max is directly proportional to amplitude, cutting the amplitude in half cuts the maximum speed exactly in half."
  },
  {
    id: "AP001-Q0116",
    course: "AP Physics 1",
    unit: "Force and Translational Dynamics",
    difficulty: "Medium",
    question: "A block of mass m is suspended from the ceiling of an elevator by a light string. If the elevator is traveling downward but slowing down at a constant deceleration rate of a, what is the magnitude of the tension force in the string?",
    options: ["m * g", "m * (g - a)", "m * (g + a)", "m * a"],
    correctAnswer: "C",
    explanation: "Since the elevator is moving downward but slowing down, its acceleration vector must point vertically upward. Setting up Newton's second law with the upward direction as positive: T - m * g = m * a -> T = m * g + m * a = m * (g + a)."
  },
  {
    id: "AP001-Q0009",
    course: "AP Physics 1",
    unit: "Kinematics",
    difficulty: "Easy",
    question: "A heavy tennis ball is hit straight upward into the air. At the absolute highest point of its flight path, what is the ball's velocity and what is its acceleration? (Neglect air resistance)",
    options: ["Velocity is zero; acceleration is zero.", "Velocity is zero; acceleration is non-zero.", "Velocity is non-zero; acceleration is zero.", "Velocity is non-zero; acceleration is non-zero."],
    correctAnswer: "B",
    explanation: "At the peak of its trajectory, the ball momentarily stops changing its position vertically, meaning its velocity is exactly zero. However, gravity continues to pull downward on the ball uninterrupted, meaning its acceleration remains constant at g (approx 9.8 m/s^2 downward)."
  },
  {
    id: "AP001-Q0050",
    course: "AP Physics 1",
    unit: "Kinematics",
    difficulty: "Medium",
    question: "A stone is thrown horizontally from the top of a cliff with an initial speed v. If air resistance is completely negligible, how do the horizontal component of the stone's velocity (v_x) and its vertical component of velocity (v_y) change as it falls?",
    options: ["v_x remains constant; v_y remains constant.", "v_x increases; v_y increases.", "v_x remains constant; v_y increases.", "v_x increases; v_y remains constant."],
    correctAnswer: "C",
    explanation: "In projectile motion where air resistance is neglected, no horizontal forces act on the object, so the horizontal velocity component v_x remains perfectly constant. Gravity acts as a constant downward vertical force, causing the downward vertical velocity component v_y to increase steadily over time."
  },
  {
    id: "AP001-Q0063",
    course: "AP Physics 1",
    unit: "Force and Translational Dynamics",
    difficulty: "Medium",
    question: "Two blocks with masses m_1 = 2 kg and m_2 = 3 kg are placed in contact with each other on a smooth, frictionless horizontal surface. If a horizontal force of 10 N pushes on mass m_1, causing both blocks to accelerate together, what is the magnitude of the contact force exerted on m_2 by m_1?",
    options: "2 N", "4 N", "6 N", "10 N"],
    correctAnswer: "C",
    explanation: "The total mass of the two-block system is m_total = 2 + 3 = 5 kg. The acceleration of both blocks is a = F / m_total = 10 N / 5 kg = 2 m/s^2. The only horizontal force acting on block 2 is the contact force from block 1: F_contact = m_2 * a = (3 kg) * (2 m/s^2) = 6 N."
  },
  {
    id: "AP001-Q0014",
    course: "AP Physics 1",
    unit: "Force and Translational Dynamics",
    difficulty: "Easy",
    question: "According to Newton's Third Law, if a heavy truck collides head-on with a small passenger car, how does the magnitude of the force exerted on the car by the truck compare to the magnitude of the force exerted on the truck by the car?",
    options: ["The force on the car is greater.", "The force on the truck is greater.", "The forces have exactly equal magnitudes.", "The relationship depends on their relative speeds."],
    correctAnswer: "C",
    explanation: "Newton's third law states that for every action, there is an equal and opposite reaction. Therefore, during any interaction or collision, the force exerted by object A on object B is always exactly equal in magnitude and opposite in direction to the force exerted by object B on object A, regardless of their masses or initial speeds."
  },
  {
    id: "AP001-Q0175",
    course: "AP Physics 1",
    unit: "Oscillations",
    difficulty: "Hard",
    question: "A simple pendulum consists of a small metallic bob hanging from a light string. If the bob is given a small initial electrical charge and a large flat uniformly charged plate is placed flat on the floor directly beneath it, generating an upward electrical force that decreases the effective acceleration of the system, what happens to the period of the pendulum?",
    options: ["The period increases.", "The period decreases.", "The period remains exactly the same.", "The pendulum ceases to oscillate entirely."],
    correctAnswer: "A",
    explanation: "The period of a pendulum is T = 2 * pi * sqrt(L / g_eff), where g_eff is the effective acceleration due to the net restoring field. The upward electrical force counters a portion of the downward gravitational force, reducing the value of g_eff. Because g_eff is in the denominator, a decrease in its value leads directly to an increase in the period of oscillation."
  },
  {
    id: "AP001-Q0023",
    course: "AP Physics 1",
    unit: "Work, Energy, and Power",
    difficulty: "Easy",
    question: "An ideal spring has a spring constant of 200 N/m. How much elastic potential energy is stored in this spring when it is compressed by a distance of exactly 0.1 meters from its relaxed equilibrium position?",
    options: ["1.0 Joule", "2.0 Joules", "10 Joules", "20 Joules"],
    correctAnswer: "A",
    explanation: "Elastic potential energy is calculated using the formula U_s = 0.5 * k * x^2. Substituting the given parameters yields U_s = 0.5 * (200 N/m) * (0.1 m)^2 = 100 * 0.01 = 1.0 Joule."
  },
  {
    id: "AP001-Q0187",
    course: "AP Physics 1",
    unit: "Oscillations",
    difficulty: "Hard",
    question: "A block-spring system with a spring constant k and mass m oscillates horizontally with an amplitude A. What is the magnitude of the displacement x from equilibrium at the precise point where the kinetic energy of the block is exactly equal to its elastic potential energy?",
    options: ["A / 2", "A / sqrt(2)", "A * sqrt(2)", "0.25 * A"],
    correctAnswer: "B",
    explanation: "Total mechanical energy is E = 0.5 * k * A^2. We are looking for the position where K = U. Since E = K + U, substituting K = U gives E = U + U = 2 * U. Thus, 0.5 * k * A^2 = 2 * (0.5 * k * x^2). Canceling the 0.5 * k from both sides gives A^2 = 2 * x^2 -> x^2 = A^2 / 2 -> x = A / sqrt(2)."
  },
  {
    id: "AP001-Q0136",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Medium",
    question: "A uniform thin hoop of mass M and radius R rolls horizontally along a rough surface without slipping. If the linear speed of the center of mass of the hoop is v, what is its total mechanical kinetic energy? (I = M * R^2)",
    options: ["0.5 * M * v^2", "M * v^2", "1.5 * M * v^2", "2 * M * v^2"],
    correctAnswer: "B",
    explanation: "Total kinetic energy is the sum of translational and rotational kinetic energy: K_total = 0.5 * M * v^2 + 0.5 * I * omega^2. Substituting I = M * R^2 and omega = v / R gives K_total = 0.5 * M * v^2 + 0.5 * (M * R^2) * (v / R)^2 = 0.5 * M * v^2 + 0.5 * M * v^2 = M * v^2."
  },
  {
    id: "AP001-Q0045",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Easy",
    question: "An open container holds water of density 1000 kg/m^3. At a certain point inside the liquid, the absolute pressure is measured to be 130,000 Pa. If atmospheric pressure is 100,000 Pa, what is the gauge pressure at this point?",
    options: ["30,000 Pa", "100,000 Pa", "130,000 Pa", "230,000 Pa"],
    correctAnswer: "A",
    explanation: "Gauge pressure is defined as the difference between absolute pressure and atmospheric pressure: P_gauge = P_absolute - P_atmospheric. Substituting the numbers: P_gauge = 130,000 Pa - 100,000 Pa = 30,000 Pa."
  },
  {
    id: "AP001-Q0036",
    course: "AP Physics 1",
    unit: "Oscillations",
    difficulty: "Easy",
    question: "A block-spring system on a horizontal frictionless track is executing simple harmonic motion. Which of the following statements is true regarding the velocity and the acceleration of the block as it passes through the central equilibrium position (x = 0)?",
    options: ["Velocity is zero; acceleration is zero.", "Velocity is at its maximum; acceleration is at its maximum.", "Velocity is zero; acceleration is at its maximum.", "Velocity is at its maximum; acceleration is zero."],
    correctAnswer: "D",
    explanation: "At the equilibrium position (x = 0), the spring is neither stretched nor compressed, meaning the spring force is zero, which makes the acceleration zero according to Newton's second law. Because all potential energy has been converted into kinetic energy at this point, the block's speed reaches its absolute maximum value."
  },
  {
    id: "AP001-Q0183",
    course: "AP Physics 1",
    unit: "Oscillations",
    difficulty: "Hard",
    question: "A simple pendulum has an oscillation period T on the surface of the Earth. If this pendulum is placed inside a spacecraft that is orbiting Earth in a stable circular orbit at an altitude equal to one Earth radius, what is the period of the pendulum inside the spacecraft?",
    options: ["sqrt(2) * T", "2 * T", "4 * T", "The pendulum will not oscillate."],
    correctAnswer: "D",
    explanation: "A spacecraft in a stable orbit is in a state of continuous freefall, creating a local weightless environment inside the cabin. A simple pendulum relies on a gravitational or accelerating field to provide a restoring force to pull it back toward equilibrium. In a weightless environment, there is no restoring force, meaning the pendulum will not oscillate at all (its period effectively becomes infinite)."
  },
  {
    id: "AP001-Q0079",
    course: "AP Physics 1",
    unit: "Linear Momentum",
    difficulty: "Medium",
    question: "A 4-kg block moving at 5 m/s to the right collides head-on with a 2-kg block moving at 4 m/s to the left. If the collision is perfectly inelastic and they stick together, what is the final velocity of the combined blocks?",
    options: ["1 m/s to the right", "2 m/s to the right", "3 m/s to the right", "4 m/s to the right"],
    correctAnswer: "B",
    explanation: "Defining rightward motion as positive: m_1 = 4 kg, v_1 = +5 m/s; m_2 = 2 kg, v_2 = -4 m/s. The total initial linear momentum is p_i = (4)(5) + (2)(-4) = 20 - 8 = +12 kg*m/s. By conservation of momentum, p_i = (m_1 + m_2) * v_f -> 12 = (4 + 2) * v_f -> 12 = 6 * v_f -> v_f = +2 m/s. Since the result is positive, it is moving to the right."
  },
  {
    id: "AP001-Q0047",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Medium",
    question: "A large closed storage container contains an ideal gas at an absolute pressure of 3.0 atmospheres. If the container is located at sea level where atmospheric pressure is exactly 1.0 atmosphere, what is the net outward force exerted on a small rectangular observation window of area 0.02 m^2 in the side of the container?",
    options: ["2,000 N", "4,000 N", "6,000 N", "8,000 N"],
    correctAnswer: "B",
    explanation: "The net pressure acting outwards on the window is the difference between internal absolute pressure and external atmospheric pressure: P_net = P_in - P_out = 3.0 atm - 1.0 atm = 2.0 atmospheres. Converting to Pascals: 2.0 atm * 100,000 Pa/atm = 200,000 Pa. Force is given by F = P_net * A = (200,000 Pa) * (0.02 m^2) = 4,000 N."
  },
  {
    id: "AP001-Q0121",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Medium",
    question: "A uniform solid cylinder of mass M and radius R rotates around its central axis. A second uniform solid cylinder has twice the mass (2M) and twice the radius (2R) of the first cylinder. What is the ratio of the rotational inertia of the second cylinder to that of the first cylinder?",
    options: ["2", "4", "8", "16"],
    correctAnswer: "C",
    explanation: "The rotational inertia of a solid cylinder is given by I = 0.5 * M * R^2. For the second cylinder, I_2 = 0.5 * (2M) * (2R)^2 = 0.5 * 2M * 4R^2 = 8 * (0.5 * M * R^2) = 8 * I_1. Thus, the ratio of their rotational inertias is 8."
  },
  {
    id: "AP001-Q0007",
    course: "AP Physics 1",
    unit: "Kinematics",
    difficulty: "Easy",
    question: "A standard sports car accelerates uniformly along a straight highway from an initial speed of 10 m/s to a final speed of 30 m/s over a time interval of 4.0 seconds. What is the magnitude of the car's constant acceleration?",
    options: ["2.5 m/s^2", "5.0 m/s^2", "7.5 m/s^2", "10 m/s^2"],
    correctAnswer: "B",
    explanation: "Acceleration is defined as the change in velocity divided by the time interval: a = (v_f - v_i) / t. Substituting the given values gives a = (30 m/s - 10 m/s) / 4.0 s = 20 / 4 = 5.0 m/s^2."
  },
  {
    id: "AP001-Q0029",
    course: "AP Physics 1",
    unit: "Linear Momentum",
    difficulty: "Easy",
    question: "A 0.20-kg baseball moving horizontally at 40 m/s is struck by a bat, causing it to travel in the opposite direction at 30 m/s. What is the magnitude of the change in momentum of the baseball?",
    options: ["2.0 kg*m/s", "6.0 kg*m/s", "14 kg*m/s", "70 kg*m/s"],
    correctAnswer: "C",
    explanation: "Defining the initial direction of the baseball as positive: p_i = m * v_i = (0.20 kg)(+40 m/s) = +8.0 kg*m/s. Because the ball travels in the opposite direction after being hit, its final velocity is negative: p_f = m * v_f = (0.20 kg)(-30 m/s) = -6.0 kg*m/s. The change in momentum is Delta_p = p_f - p_i = -6.0 - 8.0 = -14 kg*m/s, giving a magnitude of 14 kg*m/s."
  },
  {
    id: "AP001-Q0064",
    course: "AP Physics 1",
    unit: "Force and Translational Dynamics",
    difficulty: "Medium",
    question: "A heavy chandelier of mass M hangs motionless from the ceiling supported by two identical chains. Each chain makes an angle theta with the horizontal ceiling line. What is the magnitude of the tension force T in each of the two chains?",
    options: ["M * g / 2", "M * g * sin(theta)", "M * g / (2 * sin(theta))", "M * g / (2 * cos(theta))"],
    correctAnswer: "C",
    explanation: "Since the chandelier is in static equilibrium, the sum of the vertical force components from both chains must perfectly balance out the downward force of gravity (Mg). Each chain contributes a vertical component equal to T * sin(theta). Summing them up: 2 * T * sin(theta) = M * g. Solving for tension gives T = M * g / (2 * sin(theta))."
  },
  {
    id: "AP001-Q0125",
    course: "AP Physics 1",
    unit: "Torque and Rotational Dynamics",
    difficulty: "Medium",
    question: "A uniform horizontal platform of mass M and radius R rotates about a fixed frictionless vertical axle passing through its center. If a constant tangential friction force F is applied directly to the outer rim of the platform, what is the magnitude of its angular acceleration? (I = 0.5 * M * R^2)",
    options: ["F / (M * R)", "2 * F / (M * R)", "F / (2 * M * R)", "F * R / M"],
    correctAnswer: "B",
    explanation: "The net torque acting on the platform is tau = F * R. Using Newton's second law for rotation, tau = I * alpha. Substituting the rotational inertia gives F * R = (0.5 * M * R^2) * alpha. Canceling one factor of R from both sides yields F = 0.5 * M * R * alpha, which solves to alpha = 2 * F / (M * R)."
  },
  {
    id: "AP001-Q0041",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Easy",
    question: "A standard gold coin has a mass of 0.0386 kg and a volume of 0.000002 m^3. What is the density of gold based on these measurements?",
    options: ["1,930 kg/m^3", "7,720 kg/m^3", "19,300 kg/m^3", "38,600 kg/m^3"],
    correctAnswer: "C",
    explanation: "Density is defined as mass divided by volume (rho = m / V). Substituting the given numbers: rho = 0.0386 kg / 0.000002 m^3 = 19,300 kg/m^3."
  },
  {
    id: "AP001-Q0198",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Easy",
    question: "An underwater research probe is submerged to a depth where the water gauge pressure is exactly 200,000 Pa. If a flat rectangular hatch door on the side of the probe has an area of 0.15 m^2, what is the magnitude of the net force exerted by the water on this hatch door?",
    options: ["15,000 N", "30,000 N", "60,000 N", "1,333,333 N"],
    correctAnswer: "B",
    explanation: "The force exerted by a fluid pressure on a flat surface is equal to the pressure multiplied by the surface area (F = P * A). Substituting the given values gives F = (200,000 Pa) * (0.15 m^2) = 30,000 N."
  },
    {
    id: "AP001-Q0024",
    course: "AP Physics 1",
    unit: "Work, Energy, and Power",
    difficulty: "Easy",
    question: "A constant force of 15 N is applied to a small brick parallel to its direction of motion, moving it across a smooth horizontal table for a distance of 4.0 meters. What is the total work done on the brick by the applied force?",
    options: ["3.75 Joules", "11 Joules", "19 Joules", "60 Joules"],
    correctAnswer: "D",
    explanation: "Work done by a constant force parallel to the displacement is calculated using the formula W = F * d. Substituting the given values yields W = (15 N) * (4.0 m) = 60 Joules."
  },
  {
    id: "AP001-Q0104",
    course: "AP Physics 1",
    unit: "Gravitation",
    difficulty: "Medium",
    question: "A planet has twice the mass of Earth (2 * M_Earth) and twice the radius of Earth (2 * R_Earth). What is the gravitational acceleration g_surface on the surface of this planet in terms of Earth's surface gravity g?",
    options: ["0.25 * g", "0.50 * g", "g", "2 * g"],
    correctAnswer: "B",
    explanation: "The acceleration due to gravity on a planet's surface is given by the formula g_p = G * M / R^2. Substituting the planet's values relative to Earth gives g_p = G * (2 * M_Earth) / (2 * R_Earth)^2 = 2 / 4 * (G * M_Earth / R_Earth^2) = 0.50 * g."
  },
  {
    id: "AP001-Q0031",
    course: "AP Physics 1",
    unit: "Oscillations",
    difficulty: "Easy",
    question: "A block-spring system on a horizontal frictionless track has a mass of 0.25 kg and a spring constant of 100 N/m. What is the angular frequency omega of the simple harmonic oscillations?",
    options: ["5.0 rad/s", "10 rad/s", "20 rad/s", "400 rad/s"],
    correctAnswer: "C",
    explanation: "The angular frequency of a mass-spring system is calculated using the formula omega = sqrt(k / m). Substituting the given values gives omega = sqrt(100 / 0.25) = sqrt(400) = 20 rad/s."
  },
  {
    id: "AP001-Q0004",
    course: "AP Physics 1",
    unit: "Kinematics",
    difficulty: "Easy",
    question: "A ball is thrown horizontally from the top of a tall building with an initial speed of 15 m/s. What is the horizontal component of the ball's velocity after exactly 3.0 seconds of flight? (Neglect air resistance)",
    options: ["Zero", "15 m/s", "30 m/s", "45 m/s"],
    correctAnswer: "B",
    explanation: "In projectile motion where air resistance is neglected, no horizontal forces act on the object. Consequently, the horizontal component of the velocity remains constant throughout the entire trajectory, staying at exactly 15 m/s."
  },
  {
    id: "AP001-Q0048",
    course: "AP Physics 1",
    unit: "Fluids",
    difficulty: "Medium",
    question: "A solid block with a density of 800 kg/m^3 floats in a large container filled with water (density 1000 kg/m^3). What fraction of the block's total volume is submerged below the surface of the water?",
    options: ["20%", "40%", "60%", "80%"],
    correctAnswer: "D",
    explanation: "For a floating object in static equilibrium, the fraction of the volume submerged is equal to the ratio of the object's density to the fluid's density: V_sub / V_total = rho_object / rho_fluid. Substituting the values gives 800 / 1000 = 0.80, or 80%."
  },
  {
    id: "AP001-Q0075",
    course: "AP Physics 1",
    unit: "Linear Momentum",
    difficulty: "Medium",
    question: "A 5.0-kg block moving horizontally at 6.0 m/s collides with and sticks to a stationary 1.0-kg block. What is the final combined speed of the two blocks immediately after the completely inelastic collision?",
    options: ["1.0 m/s", "3.0 m/s", "5.0 m/s", "6.0 m/s"],
    correctAnswer: "C",
    explanation: "By conservation of linear momentum, the initial total momentum equals the final total momentum: m_1 * v_1 = (m_1 + m_2) * v_f. Substituting the numbers gives (5.0 kg) * (6.0 m/s) = (5.0 + 1.0 kg) * v_f -> 30 = 6.0 * v_f -> v_f = 5.0 m/s."
  }
];
