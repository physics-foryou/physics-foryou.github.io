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
  }
];
