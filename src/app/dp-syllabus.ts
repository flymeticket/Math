// Course-level data for the four DP Mathematics pages (AA SL/HL, AI SL/HL).
// SL pages render only rows whose code starts with "SL"; HL pages render every row.

export interface DpCourseInfo {
  tagline: string;
  description: string;
  suitableFor: string[];
  chooseIf: string[];
}

export interface DpTopic {
  name: string;
  rows: string[][]; // [code, content, guidance]
}

export interface DpHourRow {
  topic: string;
  hours: string;
}

export const dpCourseInfo: Record<string, DpCourseInfo> = {
  "ai-sl": {
    tagline: "Applications & Interpretation SL",
    description:
      "AI SL focuses on the practical application of mathematics in real-world situations. Technology plays a significant role in the course, and students learn to interpret data, use mathematical models, and solve applied problems.",
    suitableFor: ["Business Management", "Psychology", "Social Sciences", "Arts and Humanities", "Hospitality and Tourism"],
    chooseIf: [
      "You prefer practical applications over theoretical mathematics.",
      "You enjoy working with data and technology.",
      "You do not require advanced calculus for your future studies.",
    ],
  },
  "ai-hl": {
    tagline: "Applications & Interpretation HL",
    description:
      "AI HL combines advanced mathematical concepts with extensive use of technology, statistics, modelling, and data analysis. It is ideal for students interested in understanding and interpreting complex data.",
    suitableFor: [
      "Data Science",
      "Business Analytics",
      "Economics",
      "Actuarial Science",
      "Social Science Research",
      "Certain Computer Science programmes",
    ],
    chooseIf: [
      "You enjoy statistics, modelling, and data analysis.",
      "You are interested in the role of mathematics in modern technology and decision-making.",
      "You prefer applied mathematics over abstract mathematical theory.",
    ],
  },
  "aa-sl": {
    tagline: "Analysis & Approaches SL",
    description:
      "AA SL is designed for students who enjoy algebra, calculus, and mathematical reasoning. The course emphasizes analytical thinking, problem-solving, and the development of strong mathematical foundations.",
    suitableFor: ["Engineering", "Physical Sciences", "Mathematics", "Computer Science", "Economics (many universities)"],
    chooseIf: [
      "You enjoy algebra and calculus.",
      "You prefer theoretical and analytical mathematics.",
      "You plan to pursue STEM fields but do not require the depth of HL mathematics.",
    ],
  },
  "aa-hl": {
    tagline: "Analysis & Approaches HL",
    description:
      "AA HL is the most rigorous mathematics course offered in the IB Diploma Programme. It provides a deep understanding of calculus, algebra, functions, and mathematical proof.",
    suitableFor: ["Engineering", "Mathematics", "Physics", "Computer Science", "Data Science", "Quantitative Economics"],
    chooseIf: [
      "You have strong mathematical ability.",
      "You enjoy challenging mathematical problems.",
      "You intend to study mathematics-intensive university courses.",
    ],
  },
};

export const dpSyllabus: Record<string, DpTopic[]> = {
  ai: [
    {
      name: "Number and Algebra",
      rows: [
        ["SL 1.1", "Standard form", "Express and interpret numbers in scientific notation."],
        ["SL 1.2", "Arithmetic sequences and series", "Use nth term and sum formulae; identify the common difference."],
        ["SL 1.3", "Geometric sequences and series", "Use nth term and sum formulae; identify the common ratio."],
        ["SL 1.4", "Financial mathematics", "Compound interest and depreciation problems."],
        ["SL 1.5", "Exponents and logarithms", "Convert between exponential and logarithmic forms."],
        ["SL 1.6", "Approximation and errors", "Significant figures, bounds and percentage errors."],
        ["SL 1.7", "Amortization and annuities", "Use financial technology tools."],
        ["SL 1.8", "Solving equations using technology", "Systems of equations and polynomial equations."],
        ["AHL 1.9", "Laws of logarithms", "Product, quotient and power laws."],
        ["AHL 1.10", "Rational exponents", "Simplify numerical and algebraic expressions."],
        ["AHL 1.11", "Infinite geometric series", "Determine sums to infinity."],
        ["AHL 1.12", "Complex numbers", "Arithmetic, modulus, argument and Argand diagrams."],
        ["AHL 1.13", "Polar and exponential forms", "Conversion and operations with complex numbers."],
        ["AHL 1.14", "Matrix operations, determinants and inverses", "Addition, subtraction and multiplication."],
        ["AHL 1.15", "Matrix methods, eigenvalues and eigenvectors", "Solve systems of equations using matrices."],
      ],
    },
    {
      name: "Functions",
      rows: [
        ["SL 2.1", "Parallel and perpendicular lines", "Relationship between the slopes of lines."],
        ["SL 2.2", "Domain and range", "Sketch and interpret key features."],
        ["SL 2.3", "The graph of a function, y = f(x)", 'Know the difference between "draw" and "sketch".'],
        ["SL 2.4", "Function notation", "Evaluate and interpret functions; find the maximum and minimum of a function."],
        ["SL 2.5", "Mathematical modelling", "Linear, quadratic and exponential models."],
        ["SL 2.6", "Piecewise functions", "Define functions over different intervals."],
        ["AHL 2.7", "Composite and inverse functions", "Combine functions using composition; determine and verify inverses."],
        ["AHL 2.8", "Transformations", "Translations, reflections and stretches; combined and multiple transformations."],
        ["AHL 2.9", "Logarithmic functions and logistic models", "Properties and graphs of logarithmic models; growth with limiting capacity."],
        ["AHL 2.10", "Linearizing data", "Laws of logarithms (AHL 1.9) and Pearson's product-moment correlation coefficient."],
      ],
    },
    {
      name: "Geometry and Trigonometry",
      rows: [
        ["SL 3.1", "Distance, midpoint, angle between two lines, surface area and volume", "Applications in 2D and 3D geometry."],
        ["SL 3.2", "Trigonometric ratios, sine and cosine rule", "Solve right-angled and non-right-angled triangles; find the area of a triangle."],
        ["SL 3.3", "Applications of trigonometry, angles of elevation and depression", "Contexts may include the use of bearings."],
        ["SL 3.4", "Radians and arc length", "Angular measure and sector calculations."],
        ["SL 3.5", "Equations of perpendicular bisectors", "Find the equation from the two end points of a line."],
        ["SL 3.6", "Voronoi diagrams", "Interpretation and construction."],
        ["AHL 3.7", "Radian to degree conversion", "Use to find the area and perimeter of a sector."],
        ["AHL 3.8", "Unit circle, tan x, ambiguous case of the sine rule, Pythagorean identity", "Construction of the unit circle."],
        ["AHL 3.9", "Geometric transformations using matrices", "Reflections, stretches, enlargements, translations and rotations."],
        ["AHL 3.10", "Representation of vectors; addition, subtraction, unit and base vectors", "Algebraic and geometric approaches to sums, differences and scalar multiplication."],
        ["AHL 3.11", "Vector equation of a line in two and three dimensions", "Vector form; convert to parametric form."],
        ["AHL 3.12", "Vector applications to kinematics", "Find positions, intersections, paths, times and closest distances; projectile motion."],
        ["AHL 3.13", "Scalar and vector products", "Geometric interpretation and the angle between vectors."],
        ["AHL 3.14", "Graph theory fundamentals", "Vertices, edges and networks; includes the Google PageRank algorithm as an example."],
        ["AHL 3.15", "Adjacency matrices, walks and weighted tables", "Number of k-length walks; weights may be costs, distances or times."],
        ["AHL 3.16", "Eulerian trails, Hamiltonian paths and minimum spanning trees", "Kruskal's and Prim's algorithms; shortest path and route inspection."],
      ],
    },
    {
      name: "Statistics and Probability",
      rows: [
        ["SL 4.1", "Statistical investigations", "Data collection and organization; outliers."],
        ["SL 4.2", "Data displays", "Histograms, box plots and cumulative frequency."],
        ["SL 4.3", "Descriptive statistics", "Mean, median, spread and variation."],
        ["SL 4.4", "Correlation", "Strength and direction of relationships."],
        ["SL 4.5", "Regression", "Linear modelling and prediction."],
        ["SL 4.6", "Probability, Venn diagrams, combined, independent and conditional events", "Fundamental probability concepts; tree and Venn diagrams."],
        ["SL 4.7", "Discrete random variables", "Expected value and variance."],
        ["SL 4.8", "Binomial distribution", "Probability calculations using technology."],
        ["SL 4.9", "Normal distribution and inverse normal", "Probability calculations using technology."],
        ["SL 4.10", "Spearman's rank and Pearson's product-moment correlation", "Calculate using the GDC and identify which to use."],
        ["SL 4.11", "Hypothesis testing and chi-squared tests", "Statistical decision-making; goodness-of-fit and association tests."],
        ["AHL 4.12", "Reliability and validity tests", "Understand the difference between reliability and validity."],
        ["AHL 4.13", "Least-squares regression curves", "Sum of square residuals and the coefficient of determination, using technology."],
        ["AHL 4.14", "Linear transformations and combinations of random variables", "Expected value and variance of combinations; unbiased estimate of variance; central limit theorem."],
        ["AHL 4.15", "Regression models", "Linear, quadratic, cubic, exponential, power and sine regression."],
        ["AHL 4.16", "Confidence intervals", "Estimation of population parameters."],
        ["AHL 4.17", "Poisson distribution", "Mean and variance; selecting between the normal, binomial and Poisson distributions."],
        ["AHL 4.18", "Poisson tests; Type I and Type II errors", "One-tailed Poisson and binomial tests; calculate error probabilities."],
        ["AHL 4.19", "Transition matrices and Markov models", "State transitions over time and long-term behaviour, using technology."],
      ],
    },
    {
      name: "Calculus",
      rows: [
        ["SL 5.1", "Limits", "Informal understanding of limiting behaviour."],
        ["SL 5.2", "Derivatives", "Increasing and decreasing functions."],
        ["SL 5.3", "Polynomial differentiation", "Differentiate polynomial functions."],
        ["SL 5.4", "Tangents and normals", "Equations of tangent and normal lines."],
        ["SL 5.5", "Introduction to integration and definite integrals", "Link anti-derivatives, definite integrals and the area enclosed by a curve, using technology."],
        ["SL 5.6", "Local maxima and minima", "Using differentiation."],
        ["SL 5.7", "Optimization", "Application of differentiation."],
        ["SL 5.8", "Trapezoidal rule", "Area and accumulation concepts."],
        ["AHL 5.9", "Chain, product and quotient rules; related rates", "Differentiate composite functions."],
        ["AHL 5.10", "Second derivative", "Maxima, minima, concavity and points of inflection."],
        ["AHL 5.11", "Integration by inspection or substitution", "Standard integration techniques."],
        ["AHL 5.12", "Volumes of revolution about the x-axis or y-axis", "Using integration."],
        ["AHL 5.13", "Kinematic problems", "Displacement, velocity and acceleration using derivatives or integration."],
        ["AHL 5.14", "Differential equations", "Solve first-order differential equations."],
        ["AHL 5.15", "Slope fields", "Draw and interpret slope fields."],
        ["AHL 5.16", "Euler's method and applications of integration", "Numerical approximations; accumulation, area and modelling problems."],
      ],
    },
  ],
  aa: [
    {
      name: "Number and Algebra",
      rows: [
        ["SL 1.1", "Operations with numbers in the form a x 10^k (a < 10, k an integer)", "Calculator notation such as 5.2E30 is not acceptable; write it as 5.2 x 10^30."],
        ["SL 1.2", "Arithmetic sequences and series; nth term, sum and sigma notation", "Spreadsheets, GDCs and graphing software may be used. Identify the first term and common difference."],
        ["SL 1.3", "Geometric sequences and series; nth term, sum and sigma notation", "Identify the first term and ratio. Examples include the spread of disease and population growth."],
        ["SL 1.4", "Financial applications: compound interest and annual depreciation", "May use financial packages. Calculate real value with interest and inflation; yearly, half-yearly, quarterly or monthly."],
        ["SL 1.5", "Laws of exponents with integer exponents; introduction to logarithms (base 10 and e)", "Numerical evaluation of logarithms using technology; awareness that a^x = b."],
        ["SL 1.6", "Simple deductive proof; left-hand side to right-hand side proof; equality and identity", "Transform one side into the other using known steps; students must check their results."],
        ["SL 1.7", "Laws of exponents with rational exponents; laws of logarithms; change of base", "Use logarithm rules to solve exponential equations."],
        ["SL 1.8", "Sum of infinite convergent geometric sequences", "Use the sum-to-infinity formula."],
        ["SL 1.9", "The binomial theorem; use of Pascal's triangle", "Counting principles may be used in developing the theorem."],
        ["AHL 1.10", "Counting principles: permutations and combinations; binomial theorem for fractional and negative indices", "Not required: identical objects, circular arrangements, or proof of the theorem."],
        ["AHL 1.11", "Partial fractions", "Maximum of two distinct linear terms in the denominator; numerator degree less than denominator."],
        ["AHL 1.12", "Complex numbers; Cartesian form z = a + bi; real and imaginary parts, conjugate, modulus, argument", "The complex plane is the Argand diagram; links to vectors."],
        ["AHL 1.13", "Modulus-argument (polar) and Euler form; sums, products and quotients", "Convert between Cartesian, polar and Euler forms."],
        ["AHL 1.14", "Complex conjugate roots; De Moivre's theorem; powers and roots of complex numbers", "Complex roots occur in conjugate pairs; De Moivre includes proof by induction."],
        ["AHL 1.15", "Proof by induction, by contradiction, and use of counterexamples", "Examples include Euclid's proof of infinite primes; explain why a counterexample works."],
        ["AHL 1.16", "Systems of linear equations (up to three unknowns): unique, infinite or no solution", "Solve using algebraic and technological methods; inconsistent systems have no solution."],
      ],
    },
    {
      name: "Functions",
      rows: [
        ["SL 2.1", "Forms of a straight line; gradient and intercepts; parallel and perpendicular lines", "Calculate gradients of inclines such as mountain roads and bridges."],
        ["SL 2.2", "Function, domain, range and graph; function notation; inverse as a reflection in y = x", "Inverses exist only for one-to-one functions; the domain of the inverse equals the range of the function."],
        ["SL 2.3", "The graph of a function, y = f(x); sketching from context; graphing with technology", 'Know the difference between "draw" and "sketch"; label all axes and key features.'],
        ["SL 2.4", "Key features of graphs; points of intersection using technology", "Includes maxima, minima, intercepts, symmetry, vertex, zeros and asymptotes."],
        ["SL 2.5", "Composite functions; the identity function; finding the inverse function", "Links to inverse as a reflection in the line y = x."],
        ["SL 2.6", "The quadratic function: standard, factored and vertex forms", "A parabola; change between forms; links directly to transformations."],
        ["SL 2.7", "Quadratic equations and inequalities; the quadratic formula; the discriminant", "Use factorization, completing the square and the formula; roots or zeros."],
        ["SL 2.8", "The reciprocal function; rational functions and their graphs; asymptotes", "Sketches include all horizontal and vertical asymptotes and intercepts."],
        ["SL 2.9", "Exponential and logarithmic functions and their graphs", "Exponential and logarithmic functions are inverses of each other."],
        ["SL 2.10", "Solving equations graphically and analytically; technology where no analytic approach exists", "Apply graphing and equation-solving to real-life situations."],
        ["SL 2.11", "Transformations of graphs: translations, reflections, stretches and composites", "Be aware of the order in which transformations are performed."],
        ["AHL 2.12", "Polynomial functions, graphs and equations; factor and remainder theorems; sum and product of roots", "Links to complex roots of polynomials."],
        ["AHL 2.13", "Rational functions and their graphs", "Reciprocal functions are a subcase; include all asymptotes and intercepts."],
        ["AHL 2.14", "Odd and even functions; inverse with domain restriction; self-inverse functions", "Includes periodic functions."],
        ["AHL 2.15", "Solving equations both graphically and analytically", "Algebraic methods for polynomials up to degree 3; technology for higher degrees."],
        ["AHL 2.16", "Graphs of y = |f(x)|, y = 1/f(x), y = f(ax + b) and y = [f(x)]^2", "Sketch and analyse transformations of a base function."],
      ],
    },
    {
      name: "Geometry and Trigonometry",
      rows: [
        ["SL 3.1", "Distance and midpoint in 3D; volume and surface area of 3D solids; angle between lines or a line and a plane", "At SL, only right-angled trigonometry is set on 3D shapes."],
        ["SL 3.2", "Sine, cosine and tangent ratios; sine rule, cosine rule; area of a triangle", "Sketch well-labelled diagrams; excludes the ambiguous case of the sine rule."],
        ["SL 3.3", "Applications of right and non-right-angled trigonometry; angles of elevation and depression", "Contexts may include three-figure bearings."],
        ["SL 3.4", "The circle: radian measure; arc length; area of a sector", "Radian measures as exact multiples of pi or as decimals."],
        ["SL 3.5", "Unit circle; exact values of trigonometric ratios; ambiguous case of the sine rule", "Includes relationships between quadrants and the equation of a line through the origin."],
        ["SL 3.6", "The Pythagorean identity; double angle identities for sine and cosine", "Simple geometric diagrams or graphing software can illustrate these."],
        ["SL 3.7", "Circular functions: amplitude, period and graphs; f(x) = a sin(b(x + c)) + d", "Domains in degrees or radians; contexts include tides and Ferris wheels."],
        ["SL 3.8", "Solving trigonometric equations in a finite interval, graphically and analytically", "The general solution is not required."],
        ["AHL 3.9", "Reciprocal trigonometric ratios; Pythagorean identities; inverse functions", "Extension of basic circular functions to reciprocal and inverse functions."],
        ["AHL 3.10", "Compound angle identities; double angle identity for tan", "Derive double angle identities from compound angle identities."],
        ["AHL 3.11", "Relationships between trigonometric functions and the symmetry of their graphs", "Links to the unit circle, odd and even functions, and compound angles."],
        ["AHL 3.12", "Vectors: position and displacement; component form; vector arithmetic and proofs", "Distance between A and B is the magnitude of vector AB; prove geometric properties using vectors."],
        ["AHL 3.13", "Scalar product; angle between vectors; perpendicular and parallel vectors", "Properties and geometric interpretation of the scalar product."],
        ["AHL 3.14", "Vector equation of a line in 2D and 3D; parametric and Cartesian forms; kinematics", "Angle between lines found using direction vectors."],
        ["AHL 3.15", "Coincident, parallel, intersecting and skew lines; points of intersection", "Skew lines are non-parallel lines that do not intersect in 3D."],
        ["AHL 3.16", "Vector product of two vectors; properties; geometric interpretation", "Includes the magnitude and direction of the vector product."],
        ["AHL 3.17", "Vector and Cartesian equations of a plane", "Defined using non-parallel vectors within the plane."],
        ["AHL 3.18", "Intersections of lines and planes; angles between them", "Links directly to systems of linear equations (AHL 1.16)."],
      ],
    },
    {
      name: "Statistics and Probability",
      rows: [
        ["SL 4.1", "Population, sample and data types; reliability and bias; outliers; sampling techniques", "Outlier: more than 1.5 x IQR from the nearest quartile; includes simple random, systematic, quota and stratified sampling."],
        ["SL 4.2", "Presentation of data; histograms; cumulative frequency; box-and-whisker diagrams", "Class intervals as inequalities without gaps; box plots can show outliers."],
        ["SL 4.3", "Measures of central tendency and dispersion; grouped data; effect of constant changes", "Standard deviation and variance via technology; effect of shifting and scaling data."],
        ["SL 4.4", "Linear correlation; Pearson's r; scatter diagrams; regression line of y on x", "r is meaningful only for linear relationships; distinguish correlation and causation."],
        ["SL 4.5", "Trial, outcome, sample space, event; probability formula; complementary events", "Distinguish experimental and theoretical probability."],
        ["SL 4.6", "Venn, tree and sample-space diagrams; combined, mutually exclusive, conditional and independent events", "Probabilities with and without replacement."],
        ["SL 4.7", "Discrete random variables and probability distributions; expected value", "E(X) = 0 indicates a fair game."],
        ["SL 4.8", "Binomial distribution; mean and variance", "Find binomial probabilities using technology; formal proof not required."],
        ["SL 4.9", "The normal distribution; probability and inverse normal calculations", "Calculations must use technology; no z-transformation at this stage."],
        ["SL 4.10", "Regression line of x on y for prediction", "Cannot always reliably predict x from y using an x-on-y line."],
        ["SL 4.11", "Conditional probability formulae; testing for independence", "Formal conditional probability relationships."],
        ["SL 4.12", "Standardization of normal variables (z-values); inverse normal with unknown parameters", "z gives the number of standard deviations from the mean."],
        ["AHL 4.13", "Bayes' theorem for up to three events", "Links to conditional probability and probability trees."],
        ["AHL 4.14", "Variance of discrete random variables; continuous random variables and pdfs; linear transformations", "Mode is where the pdf is maximum; includes mean, median, variance and standard deviation."],
      ],
    },
    {
      name: "Calculus",
      rows: [
        ["SL 5.1", "Limits and introduction to derivatives as rates of change and gradients", "Estimate limits from tables and graphs; understand the notation f'(x) and dy/dx."],
        ["SL 5.2", "Increasing and decreasing functions", "Use the sign of the first derivative."],
        ["SL 5.3", "Basic differentiation rules", "Differentiate polynomial, exponential, logarithmic and trigonometric functions."],
        ["SL 5.4", "Tangents and normals", "Find equations analytically and with technology."],
        ["SL 5.5", "Introduction to integration and antiderivatives", "Apply boundary conditions; areas under curves via definite integrals."],
        ["SL 5.6", "Advanced differentiation techniques", "Apply the chain, product and quotient rules; link to composite functions."],
        ["SL 5.7", "Second derivatives", "Interpret f, f' and f''; explore graph behaviour with technology."],
        ["SL 5.8", "Optimization and curve sketching", "Local maxima, minima and points of inflection using first and second derivative tests."],
        ["SL 5.9", "Kinematics", "Relate displacement, velocity and acceleration; calculate distance travelled."],
        ["SL 5.10", "Indefinite integration techniques", "Integrate standard functions and simple composites using substitution."],
        ["SL 5.11", "Definite integrals and area", "Evaluate definite integrals; areas under and between curves."],
        ["AHL 5.12", "Continuity, differentiability and first principles", "Differentiate polynomials from first principles."],
        ["AHL 5.13", "Advanced limits", "Evaluate indeterminate forms using l'Hopital's Rule and Maclaurin series."],
        ["AHL 5.14", "Implicit differentiation and related rates", "Solve optimization and rate-of-change problems with implicit relationships."],
        ["AHL 5.15", "Advanced differentiation and integration", "Inverse trigonometric, exponential and logarithmic functions; use partial fractions."],
        ["AHL 5.16", "Integration techniques", "Apply substitution and integration by parts, including repeated parts."],
        ["AHL 5.17", "Applications of integration", "Areas relative to the y-axis and volumes of revolution."],
        ["AHL 5.18", "Differential equations", "Solve first-order equations using separation of variables, integrating factors and Euler's method."],
        ["AHL 5.19", "Maclaurin series", "Obtain expansions, including from differential equations."],
      ],
    },
  ],
};

export const dpHours: Record<string, DpHourRow[]> = {
  "ai-sl": [
    { topic: "Number and Algebra", hours: "16" },
    { topic: "Functions", hours: "31" },
    { topic: "Geometry and Trigonometry", hours: "18" },
    { topic: "Statistics and Probability", hours: "52" },
    { topic: "Calculus", hours: "19" },
    { topic: "Internal Assessment", hours: "14" },
    { topic: "Total", hours: "150" },
  ],
  "ai-hl": [
    { topic: "Number and Algebra", hours: "29" },
    { topic: "Functions", hours: "50" },
    { topic: "Geometry and Trigonometry", hours: "36" },
    { topic: "Statistics and Probability", hours: "79" },
    { topic: "Calculus", hours: "32" },
    { topic: "Internal Assessment", hours: "14" },
    { topic: "Total", hours: "240" },
  ],
  "aa-sl": [
    { topic: "Number and Algebra", hours: "19" },
    { topic: "Functions", hours: "21" },
    { topic: "Geometry and Trigonometry", hours: "25" },
    { topic: "Statistics and Probability", hours: "27" },
    { topic: "Calculus", hours: "44" },
    { topic: "Internal Assessment", hours: "14" },
    { topic: "Total", hours: "150" },
  ],
  "aa-hl": [
    { topic: "Number and Algebra", hours: "39" },
    { topic: "Functions", hours: "42" },
    { topic: "Geometry and Trigonometry", hours: "51" },
    { topic: "Statistics and Probability", hours: "33" },
    { topic: "Calculus", hours: "61" },
    { topic: "Internal Assessment", hours: "14" },
    { topic: "Total", hours: "240" },
  ],
};
