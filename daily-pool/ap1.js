const ap1DailyPool = [
  {
    "original_number": 12,
    "topic": "Force and Translational Dynamics",
    "difficulty": "Easy",
    "question": "A crate sits securely on the bed of a delivery truck. As the truck accelerates forward, what specific force causes the crate to accelerate forward at the exact same rate without sliding?",
    "options": {
      "A": "The normal force",
      "B": "The static friction force",
      "C": "The kinetic friction force",
      "D": "The gravitational force"
    },
    "correct_answer": "B",
    "explanation": "Static friction acts between two surfaces to prevent relative slipping. As the truck accelerates forward, the truck bed exerts a forward static friction force on the bottom of the crate to keep it locked in place relative to the truck, allowing it to accelerate along with the vehicle."
  },
  {
    "original_number": 3,
    "topic": "Kinematics",
    "difficulty": "Easy",
    "question": "An object is dropped from rest from the edge of a tall cliff. If air resistance is negligible, how far does the object fall during the first 2 seconds of its flight? (Assume $g = 10\\text{ m/s}^2$)",
    "options": {
      "A": "10 m",
      "B": "20 m",
      "C": "40 m",
      "D": "45 m"
    },
    "correct_answer": "B",
    "explanation": "Using the kinematic formula for displacement from rest, $\\Delta y = \\frac{1}{2}gt^2$. Plugging in the given values yields $\\Delta y = \\frac{1}{2}(10\\text{ m/s}^2)(2\\text{ s})^2 = 5 \\cdot 4 = 20\\text{ m}$."
  },
  {
    "original_number": 17,
    "topic": "Work, Energy, and Power",
    "difficulty": "Easy",
    "question": "A ball is dropped from rest from a balcony. As it falls freely toward the ground with negligible air resistance, what happens to its kinetic energy and its gravitational potential energy?",
    "options": {
      "A": "Kinetic energy increases; potential energy increases.",
      "B": "Kinetic energy decreases; potential energy increases.",
      "C": "Kinetic energy increases; potential energy decreases.",
      "D": "Kinetic energy decreases; potential energy decreases."
    },
    "correct_answer": "C",
    "explanation": "As the ball falls, it speeds up due to gravity, which increases its kinetic energy ($K = \\frac{1}{2}mv^2$). Concurrently, its height drops, which decreases its gravitational potential energy ($U_g = mgh$). Total mechanical energy is conserved as potential energy transforms directly into kinetic energy."
  },
  {
    "original_number": 8,
    "topic": "Force and Translational Dynamics",
    "difficulty": "Easy",
    "question": "A 2-kg book rests completely stationary on a flat horizontal table. What is the magnitude of the upward normal force exerted by the table surface on the book? (Assume $g = 10\\text{ m/s}^2$)",
    "options": {
      "A": "0 N",
      "B": "2 N",
      "C": "10 N",
      "D": "20 N"
    },
    "correct_answer": "D",
    "explanation": "Because the book is at rest, its acceleration is zero, meaning the net vertical force must be zero ($F_{\\text{net}} = 0$). The upward normal force must perfectly balance the downward force of gravity: $F_N = mg = (2\\text{ kg})(10\\text{ m/s}^2) = 20\\text{ N}$."
  },
  {
    "original_number": 15,
    "topic": "Work, Energy, and Power",
    "difficulty": "Easy",
    "question": "A 2-kg toy airplane glides through the air with a constant translational speed of $4\\text{ m/s}$. What is the kinetic energy of the toy airplane?",
    "options": {
      "A": "4 J",
      "B": "8 J",
      "C": "16 J",
      "D": "32 J"
    },
    "correct_answer": "C",
    "explanation": "Kinetic energy is given by the formula $K = \\frac{1}{2}mv^2$. Plugging in the values: $K = \\frac{1}{2}(2\\text{ kg})(4\\text{ m/s})^2 = 1 \\cdot 16 = 16\\text{ J}$."
  },
  {
    "original_number": 2,
    "topic": "Kinematics",
    "difficulty": "Easy",
    "question": "A runner starts from rest and accelerates at a constant rate of $2\\text{ m/s}^2$ along a straight path for 3 seconds. What is the runner's final speed?",
    "options": {
      "A": "1.5 m/s",
      "B": "5 m/s",
      "C": "6 m/s",
      "D": "9 m/s"
    },
    "correct_answer": "C",
    "explanation": "Using the kinematic equation $v_f = v_i + at$, where the runner starts from rest ($v_i = 0$), we get $v_f = 0 + (2\\text{ m/s}^2)(3\\text{ s}) = 6\\text{ m/s}$."
  },
  {
    "original_number": 11,
    "topic": "Force and Translational Dynamics",
    "difficulty": "Easy",
    "question": "Two blocks with masses of 2 kg and 4 kg are pushed together along a frictionless surface by a horizontal force of 18 N applied to the 2-kg block. What is the acceleration of the two-block system?",
    "options": {
      "A": "3 m/s²",
      "B": "4.5 m/s²",
      "C": "6 m/s²",
      "D": "9 m/s²"
    },
    "correct_answer": "A",
    "explanation": "Treat the two touching blocks as a single combined system with a total mass of $m_{\\text{total}} = 2\\text{ kg} + 4\\text{ kg} = 6\\text{ kg}$. Using Newton's second law: $a = \\frac{F_{\\text{net}}}{m_{\\text{total}}} = \\frac{18\\text{ N}}{6\\text{ kg}} = 3\\text{ m/s}^2$."
  },
  {
    "original_number": 5,
    "topic": "Kinematics",
    "difficulty": "Easy",
    "question": "A position-time graph for an object moving along a straight line shows a straight line sloping upward. What does this indicate about the object's motion?",
    "options": {
      "A": "The object is stationary.",
      "B": "The object is moving at a constant, non-zero velocity.",
      "C": "The object is accelerating at a constant rate.",
      "D": "The object is slowing down to a stop."
    },
    "correct_answer": "B",
    "explanation": "The slope of a position-time graph represents the velocity of the object. A straight, diagonal line has a constant slope, meaning the velocity remains steady and unchanging over time."
  },
  {
    "original_number": 18,
    "topic": "Work, Energy, and Power",
    "difficulty": "Easy",
    "question": "An ideal spring with a spring constant of $k = 200\\text{ N/m}$ is compressed by a distance of 0.1 meters from its relaxed equilibrium position. How much elastic potential energy is stored inside the compressed spring?",
    "options": {
      "A": "1 J",
      "B": "2 J",
      "C": "10 J",
      "D": "20 J"
    },
    "correct_answer": "A",
    "explanation": "The elastic potential energy stored in a spring is calculated using $U_s = \\frac{1}{2}kx^2$. Substituting the values gives $U_s = \\frac{1}{2}(200\\text{ N/m})(0.1\\text{ m})^2 = 100 \\cdot 0.01 = 1\\text{ J}$."
  },
  {
    "original_number": 9,
    "topic": "Force and Translational Dynamics",
    "difficulty": "Easy",
    "question": "A heavy block is pulled along a rough horizontal floor at a constant velocity by a horizontal rope. If the tension force applied by the rope is 40 N, what is the magnitude of the kinetic friction force acting on the block?",
    "options": {
      "A": "0 N",
      "B": "Less than 40 N",
      "C": "Exactly 40 N",
      "D": "Greater than 40 N"
    },
    "correct_answer": "C",
    "explanation": "\"Constant velocity\" means the acceleration of the block is zero, which implies that the net force acting on it must be zero ($F_{\\text{net}} = 0$). Therefore, the forward tension force must exactly balance the opposing friction force, making friction equal to 40 N."
  },
  {
    "original_number": 16,
    "topic": "Work, Energy, and Power",
    "difficulty": "Easy",
    "question": "A 3-kg block is lifted vertically upward from the floor to the top of a table that is 2 meters high. What is the increase in the gravitational potential energy of the block-Earth system? (Assume $g = 10\\text{ m/s}^2$)",
    "options": {
      "A": "6 J",
      "B": "15 J",
      "C": "30 J",
      "D": "60 J"
    },
    "correct_answer": "D",
    "explanation": "The gravitational potential energy change is given by $\\Delta U_g = mgh$. Substituting the given mass, acceleration, and height yields $\\Delta U_g = (3\\text{ kg})(10\\text{ m/s}^2)(2\\text{ m}) = 60\\text{ J}$."
  },
  {
    "original_number": 4,
    "topic": "Kinematics",
    "difficulty": "Easy",
    "question": "A ball is kicked horizontally off the edge of a flat roof with an initial horizontal speed of $8\\text{ m/s}$. If it takes 3 seconds to strike the ground, what is the horizontal distance it travels before landing?",
    "options": {
      "A": "24 m",
      "B": "30 m",
      "C": "45 m",
      "D": "72 m"
    },
    "correct_answer": "A",
    "explanation": "In projectile motion, horizontal velocity remains constant because there is no horizontal acceleration ($a_x = 0$). The horizontal distance is simply $\\Delta x = v_x \\cdot t = (8\\text{ m/s})(3\\text{ s}) = 24\\text{ m}$."
  },
  {
    "original_number": 13,
    "topic": "Force and Translational Dynamics",
    "difficulty": "Easy",
    "question": "A small bird lands on a thick tree branch. According to Newton's third law, if the gravitational force of the Earth pulls down on the bird, what is the equal and opposite reaction force?",
    "options": {
      "A": "The upward normal force exerted by the branch on the bird.",
      "B": "The downward force exerted by the bird's feet on the branch.",
      "C": "The upward gravitational force exerted by the bird on the Earth.",
      "D": "The air resistance pushing up against the bird's feathers."
    },
    "correct_answer": "C",
    "explanation": "Newton's third law force pairs always involve the exact same two objects interacting. If the action force is 'Earth pulling downward on the bird,' the reaction force must be 'bird pulling upward on the Earth' with an identical magnitude of force."
  },
  {
    "original_number": 7,
    "topic": "Force and Translational Dynamics",
    "difficulty": "Easy",
    "question": "An astronaut travels from Earth to the Moon, where the local gravitational field is weaker. How do the astronaut's mass and weight on the Moon compare to their values on Earth?",
    "options": {
      "A": "Mass decreases; weight decreases.",
      "B": "Mass remains the same; weight remains the same.",
      "C": "Mass decreases; weight remains the same.",
      "D": "Mass remains the same; weight decreases."
    },
    "correct_answer": "D",
    "explanation": "Mass is an intrinsic property representing the amount of matter in an object and does not change with location. Weight is the gravitational force acting on that mass ($W = mg$). Because the Moon's gravity $g$ is weaker than Earth's, the astronaut's weight decreases while their mass stays identical."
  },
  {
    "original_number": 10,
    "topic": "Force and Translational Dynamics",
    "difficulty": "Easy",
    "question": "A passenger stands inside an elevator that is moving upward while slowing down to a stop at a high floor. How does the magnitude of the upward normal force exerted by the elevator floor on the passenger compare to the passenger's actual weight?",
    "options": {
      "A": "The normal force is equal to the weight.",
      "B": "The normal force is greater than the weight.",
      "C": "The normal force is less than the weight.",
      "D": "The normal force is zero."
    },
    "correct_answer": "C",
    "explanation": "Because the elevator is moving upward but slowing down, its acceleration vector points downward. According to Newton's second law, the net force must also point downward, meaning the downward force of gravity must be larger than the upward normal force ($mg - F_N = ma \\rightarrow F_N = mg - ma$)."
  }
];
