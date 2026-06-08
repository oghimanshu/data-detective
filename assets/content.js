const GAME_CONTENT = [
    {
        "id": "topicA",
        "title": "Topic A: Why Python for Data Science?",
        "blocks": [
            {
                "type": "heading",
                "content": "Theoretical Framework"
            },
            {
                "type": "dialogue",
                "content": "Detective, listen to me. Tracing the street-level data smuggler. Python has become the lingua franca of data science. But why? It's not just hype. Python\n                        offers a unique combination of readability (it reads like English), a massive\n                        ecosystem of libraries (Pandas, NumPy, Scikit-Learn), and a vibrant\n                        community."
            },
            {
                "type": "heading",
                "content": "Code Implementation"
            },
            {
                "type": "heading",
                "content": "Part A: Readability"
            },
            {
                "type": "code",
                "content": "# Python: Simple and Readable\nusers = [\"Alice\", \"Bob\"]\nfor user in users:\n    print(f\"Hello, {user}\")"
            },
            {
                "type": "heading",
                "content": "Part B: The Power of Libraries"
            },
            {
                "type": "code",
                "content": "import math\nprint(math.pi)"
            },
            {
                "type": "challenge",
                "title": "\ud83d\ude80 Topic A Challenge",
                "content": "ENCRYPTED LOG: Print \"Python is awesome!\" using the print() function."
            }
        ]
    },
    {
        "id": "topicB",
        "title": "Topic B: Numeric & Boolean Types",
        "blocks": [
            {
                "type": "heading",
                "content": "Theoretical Framework"
            },
            {
                "type": "dialogue",
                "content": "Detective, listen to me. Tracing the street-level data smuggler. Python supports integers, floating-point numbers, and complex numbers. Booleans represent truth\n                        values. These are the fundamental building blocks of data."
            },
            {
                "type": "heading",
                "content": "Code Implementation"
            },
            {
                "type": "heading",
                "content": "Part A: Numeric Types"
            },
            {
                "type": "code",
                "content": "x = 10        # int\ny = 3.14      # float\nz = 2 + 3j    # complex\n\nprint(f\"Type of x: {type(x)}\")\nprint(f\"Type of z: {type(z)}\")\nprint(f\"Real part of z: {z.real}\")"
            },
            {
                "type": "heading",
                "content": "Part B: Booleans"
            },
            {
                "type": "code",
                "content": "is_active = True\nis_admin = False\nprint(10 > 5)"
            },
            {
                "type": "challenge",
                "title": "\ud83d\ude80 Topic B Challenge",
                "content": "ENCRYPTED LOG: Create a complex number c = 5 + 7j. Print its imaginary part."
            }
        ]
    },
    {
        "id": "topicC",
        "title": "Topic C: Text Sequence Type (Strings)",
        "blocks": [
            {
                "type": "heading",
                "content": "Theoretical Framework"
            },
            {
                "type": "dialogue",
                "content": "Detective, listen to me. Tracing the street-level data smuggler. Strings are immutable sequences of Unicode characters. Text processing is central to data\n                        analysis (e.g., cleaning names, parsing logs)."
            },
            {
                "type": "heading",
                "content": "Code Implementation"
            },
            {
                "type": "heading",
                "content": "Part A: Slicing & Indexing"
            },
            {
                "type": "code",
                "content": "text = \"Data Science\"\nprint(text[0])      # First char\nprint(text[-1])     # Last char\nprint(text[0:4])    # First 4 chars"
            },
            {
                "type": "heading",
                "content": "Part B: String Methods"
            },
            {
                "type": "code",
                "content": "s = \"  python  \"\nprint(s.strip().upper())\nprint(s.replace(\"python\", \"pandas\"))"
            },
            {
                "type": "challenge",
                "title": "\ud83d\ude80 Topic C Challenge",
                "content": "ENCRYPTED LOG: Given word = \"Analysis\", print the last 3 characters using\n                            negative indexing."
            }
        ]
    },
    {
        "id": "topicD",
        "title": "Topic D: Sequence Types (List & Tuple)",
        "blocks": [
            {
                "type": "heading",
                "content": "Theoretical Framework"
            },
            {
                "type": "dialogue",
                "content": "Detective, listen to me. Tracing the street-level data smuggler. Lists are mutable (changeable) sequences. Tuples are immutable\n                        (unchangeable). Use lists for data that changes, tuples for fixed data."
            },
            {
                "type": "heading",
                "content": "Code Implementation"
            },
            {
                "type": "heading",
                "content": "Part A: Lists (Mutable)"
            },
            {
                "type": "code",
                "content": "nums = [1, 2, 3]\nnums[0] = 100    # Change\nnums.append(4)   # Add\nprint(nums)"
            },
            {
                "type": "heading",
                "content": "Part B: Tuples (Immutable)"
            },
            {
                "type": "code",
                "content": "coords = (10, 20)\n# coords[0] = 5  # This would cause an error!\nprint(coords[0])"
            },
            {
                "type": "challenge",
                "title": "\ud83d\ude80 Topic D Challenge",
                "content": "ENCRYPTED LOG: Create a tuple with 3 numbers. Try to change the first number and observe the\n                            error (mentally or in a local notebook)."
            }
        ]
    },
    {
        "id": "topicE",
        "title": "Topic E: Set & Mapping Types",
        "blocks": [
            {
                "type": "heading",
                "content": "Theoretical Framework"
            },
            {
                "type": "dialogue",
                "content": "Detective, listen to me. Tracing the street-level data smuggler. Sets are unordered collections of unique items (no duplicates).\n                        Dictionaries (Mappings) store data in key-value pairs.\n                        Frozensets are immutable sets."
            },
            {
                "type": "heading",
                "content": "Code Implementation"
            },
            {
                "type": "heading",
                "content": "Part A: Sets & Frozensets"
            },
            {
                "type": "code",
                "content": "# Set (Mutable)\nunique_ids = {101, 102, 101}\nprint(unique_ids)  # Duplicates removed\n\n# Frozenset (Immutable)\nconst_set = frozenset([1, 2, 3])\n# const_set.add(4)  # Error!"
            },
            {
                "type": "heading",
                "content": "Part B: Dictionaries (Mappings)"
            },
            {
                "type": "code",
                "content": "user = {\"name\": \"Eve\", \"role\": \"Admin\"}\nprint(user[\"name\"])\nuser[\"role\"] = \"User\"  # Update\nprint(user)"
            },
            {
                "type": "challenge",
                "title": "\ud83d\ude80 Topic E Challenge",
                "content": "ENCRYPTED LOG: Create a set from the list [1, 2, 2, 3, 3, 3] and print it to\n                            see duplicates vanish."
            }
        ]
    },
    {
        "id": "topicF",
        "title": "Topic F: Binary Types",
        "blocks": [
            {
                "type": "heading",
                "content": "Theoretical Framework"
            },
            {
                "type": "dialogue",
                "content": "Detective, listen to me. Tracing the street-level data smuggler. Computers think in 0s and 1s. Bytes and Bytearrays let you work\n                        with raw binary data (like images or network packets). Memoryview allows\n                        accessing memory without copying."
            },
            {
                "type": "heading",
                "content": "Code Implementation"
            },
            {
                "type": "heading",
                "content": "Part A: Bytes & Bytearray"
            },
            {
                "type": "code",
                "content": "# Bytes (Immutable)\nb_data = b\"Hello\"\nprint(b_data[0])  # ASCII for 'H' is 72\n\n# Bytearray (Mutable)\nba = bytearray(b\"Hello\")\nba[0] = 87  # Change 'H' to 'W' (ASCII 87)\nprint(ba)"
            },
            {
                "type": "challenge",
                "title": "\ud83d\ude80 Topic F Challenge",
                "content": "ENCRYPTED LOG: Create a bytearray of size 5 filled with zeros. Print it."
            }
        ]
    },
    {
        "id": "topicG",
        "title": "Topic G: Control Flow (Logic & Loops)",
        "blocks": [
            {
                "type": "heading",
                "content": "Theoretical Framework"
            },
            {
                "type": "dialogue",
                "content": "Detective, listen to me. Tracing the street-level data smuggler. Code doesn't always run in a straight line. Control Flow allows your program to\n                        make decisions (if/else) and repeat tasks (loops)."
            },
            {
                "type": "heading",
                "content": "Code Implementation"
            },
            {
                "type": "heading",
                "content": "Part A: Making Decisions"
            },
            {
                "type": "code",
                "content": "score = 85\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelse:\n    print(\"C\")"
            },
            {
                "type": "heading",
                "content": "Part B: Loops"
            },
            {
                "type": "code",
                "content": "for i in range(3):\n    print(f\"Count {i}\")"
            },
            {
                "type": "challenge",
                "title": "\ud83d\ude80 Topic G Challenge",
                "content": "ENCRYPTED LOG: Write a loop that prints \"Hello\" 3 times."
            }
        ]
    },
    {
        "id": "topicH",
        "title": "Topic H: Functions & Libraries",
        "blocks": [
            {
                "type": "heading",
                "content": "Theoretical Framework"
            },
            {
                "type": "dialogue",
                "content": "Detective, listen to me. Tracing the street-level data smuggler. Functions let you save code and reuse it later. Libraries are\n                        collections of functions written by others."
            },
            {
                "type": "heading",
                "content": "Code Implementation"
            },
            {
                "type": "heading",
                "content": "Part A: Functions"
            },
            {
                "type": "code",
                "content": "def greet(name):\n    return f\"Hello, {name}!\"\n\nprint(greet(\"Coder\"))"
            },
            {
                "type": "heading",
                "content": "Part B: Libraries"
            },
            {
                "type": "code",
                "content": "import math\nprint(math.sqrt(25))"
            },
            {
                "type": "challenge",
                "title": "\ud83d\ude80 Topic H Challenge",
                "content": "ENCRYPTED LOG: Write a function add(a, b) that returns the sum of two numbers."
            }
        ]
    },
    {
        "id": "topic1",
        "title": "Topic 1: Data Ingestion from Diverse Formats",
        "blocks": [
            {
                "type": "heading",
                "content": "Theoretical Framework"
            },
            {
                "type": "dialogue",
                "content": "Detective, listen to me. Tracing the street-level data smuggler. Economic data is rarely clean. It comes in legacy formats (fixed-width text), spreadsheets\n                        (Excel), or modern web standards (JSON). The first step in analysis is parsing this byte-stream\n                        into a structured DataFrame. Without proper ingestion, analysis is impossible."
            },
            {
                "type": "heading",
                "content": "Code Implementation"
            },
            {
                "type": "heading",
                "content": "Part A: Reading Indian Census Data (Text Files)"
            },
            {
                "type": "code",
                "content": "import pandas as pd\nfrom io import StringIO\nimport json\n\n# Simulating a pipe-separated (|) file\ncensus_data = \"\"\"State|Population_Millions|Literacy_Rate\nMaharashtra|112.4|82.3\nUttar Pradesh|199.8|67.7\nKerala|33.4|94.0\nBihar|104.1|61.8\"\"\"\n\n# Reading the string as if it were a file\ndf_census = pd.read_csv(StringIO(census_data), sep='|')\nprint(\"--- Text File Ingestion ---\")\nprint(df_census)"
            },
            {
                "type": "heading",
                "content": "Part B: Reading JSON Data (API Format)"
            },
            {
                "type": "code",
                "content": "# Simulating a JSON response from an API\njson_str = '{\"Country\": {\"0\": \"India\", \"1\": \"USA\"}, \"GDP_Trillion\": {\"0\": 3.7, \"1\": 23.0}}'\n\n# Ingesting JSON\ndata_dict = json.loads(json_str)\ndf_json = pd.DataFrame.from_dict(data_dict)\n\nprint(\"--- JSON API Ingestion ---\")\nprint(df_json)"
            },
            {
                "type": "heading",
                "content": "Part C: SQL Database Ingestion (SQLite)"
            },
            {
                "type": "code",
                "content": "import sqlite3\n\n# Create a dummy database in memory\nconn = sqlite3.connect(':memory:')\ncursor = conn.cursor()\ncursor.execute('CREATE TABLE sales (id INT, amount REAL)')\ncursor.execute('INSERT INTO sales VALUES (1, 100.5), (2, 200.0)')\nconn.commit()\n\n# Read from SQL into DataFrame\nquery = \"SELECT * FROM sales\"\ndf_sql = pd.read_sql_query(query, conn)\n\nprint(\"--- SQL Ingestion ---\")\nprint(df_sql)"
            },
            {
                "type": "challenge",
                "title": "\ud83d\ude80 Topic 1 Challenge",
                "content": "ENCRYPTED LOG: Try creating a CSV file named my_data.csv with headers\n                            \"Date,Price\" and values \"2023-01-01,500\". Then read it back using\n                            pd.read_csv('my_data.csv')."
            }
        ]
    },
    {
        "id": "topic2",
        "title": "Topic 2: NumPy Arithmetic Operations",
        "blocks": [
            {
                "type": "heading",
                "content": "Theoretical Framework"
            },
            {
                "type": "dialogue",
                "content": "Detective, listen to me. Infiltrating the OmniCorp server farm. Vectorization is the process of applying mathematical operations to an entire\n                        array at once, rather than looping through individual elements. This utilizes SIMD\n                            (Single Instruction, Multiple Data) processor features, making calculations\n                        millions of times faster for large datasets."
            },
            {
                "type": "heading",
                "content": "Code Implementation"
            },
            {
                "type": "heading",
                "content": "Part A: Real vs Nominal GDP (Vectorization)"
            },
            {
                "type": "code",
                "content": "import numpy as np\n\n# Nominal GDP for 3 States (in Lakh Crores)\nnominal_gdp = np.array([20.5, 15.2, 8.9]) \n\n# GDP Deflator (Base 100)\ndeflator = np.array([120, 115, 110])\n\n# Calculate Real GDP\nreal_gdp = (nominal_gdp / deflator) * 100\n\nprint(f\"Nominal GDP: {nominal_gdp}\")\nprint(f\"Real GDP:    {np.round(real_gdp, 2)}\")"
            },
            {
                "type": "heading",
                "content": "Part B: Logic Masks (Filtering)"
            },
            {
                "type": "code",
                "content": "incomes = np.array([50000, 120000, 45000, 80000])\n\n# Who earns more than 60k?\nhigh_earners = incomes[incomes > 60000]\n\nprint(f\"High Income Segments: {high_earners}\")"
            },
            {
                "type": "challenge",
                "title": "\ud83d\ude80 Topic 2 Challenge",
                "content": "ENCRYPTED LOG: Create two arrays: Year1_Rev = np.array([100, 200]) and\n                            Year2_Rev = np.array([110, 250]). Calculate the percentage growth array:\n                            ((Year2 - Year1) / Year1) * 100."
            }
        ]
    },
    {
        "id": "topic3",
        "title": "Topic 3: Advanced Slicing",
        "blocks": [
            {
                "type": "heading",
                "content": "Theoretical Framework"
            },
            {
                "type": "dialogue",
                "content": "Detective, listen to me. Infiltrating the OmniCorp server farm. Slicing allows us to view specific subsets of data without copying memory. This is done by\n                        manipulating Memory Strides. This is critical for time-series analysis (e.g.,\n                        comparing Q1 vs Q4 performance). Efficient slicing prevents memory overload when working with\n                        massive economic datasets."
            },
            {
                "type": "heading",
                "content": "NIFTY 50 Market Analysis"
            },
            {
                "type": "code",
                "content": "import numpy as np\n\n# Simulated NIFTY 50 prices (20 days)\nprices = np.linspace(19000, 20000, 20)\n\nprint(f\"First Week: {np.round(prices[:5], 0)}\")\nprint(f\"Last Week:  {np.round(prices[-5:], 0)}\")\nprint(f\"Net Growth: {np.round(prices[-1] - prices[0], 0)}\")"
            },
            {
                "type": "challenge",
                "title": "\ud83d\ude80 Topic 3 Challenge",
                "content": "ENCRYPTED LOG: Given an array of 12 months: months = np.arange(1, 13). Then use\n                            .reshape(3, 4) to change it into a 3-row, 4-column matrix. Print its new shape."
            }
        ]
    },
    {
        "id": "topic4",
        "title": "Topic 4: Array Metadata & Memory",
        "blocks": [
            {
                "type": "heading",
                "content": "Theoretical Framework"
            },
            {
                "type": "dialogue",
                "content": "Detective, listen to me. Infiltrating the OmniCorp server farm. Understanding metadata is vital for optimization. A 64-bit float takes twice as much RAM as a\n                        32-bit float. Knowing the shape and dtype prevents dimension mismatch\n                        errors in linear algebra (e.g., you cannot multiply a 3x3 matrix by a 2x2 matrix)."
            },
            {
                "type": "heading",
                "content": "Inspecting & Optimising Memory"
            },
            {
                "type": "code",
                "content": "import numpy as np\n\n# A matrix of 3 Sectors across 4 Quarters (Standard Float64)\ndata = np.zeros((3, 4))\n\nprint(f\"Initial Memory: {data.nbytes} bytes\")\n\n# Optimisation: Convert to Float32\ndata_optimized = data.astype('float32')\nprint(f\"Optimised Memory: {data_optimized.nbytes} bytes\")"
            },
            {
                "type": "challenge",
                "title": "\ud83d\ude80 Topic 4 Challenge",
                "content": "ENCRYPTED LOG: Create a 1D array of 12 elements using np.arange(12). Then use\n                            .reshape(3, 4) to change it into a 3-row, 4-column matrix. Print its new shape."
            }
        ]
    },
    {
        "id": "topic5",
        "title": "Topic 5: DataFrames",
        "blocks": [
            {
                "type": "heading",
                "content": "Theoretical Framework"
            },
            {
                "type": "dialogue",
                "content": "Detective, listen to me. Infiltrating the OmniCorp server farm. The DataFrame is the core of pandas. Before analysis, we must \"audit\" the data\n                        using summary statistics to check for sanity (e.g., ensuring no negative prices exist) and to\n                        understand the distribution (mean vs median)."
            },
            {
                "type": "heading",
                "content": "Indian Startup Ecosystem Audit"
            },
            {
                "type": "code",
                "content": "import pandas as pd\n\ndata = [\n    ['Flipkart', 'Bengaluru', 37.6],\n    ['Paytm', 'Noida', 16.0],\n    ['Ola', 'Bengaluru', 7.3],\n    ['Zomato', 'Gurugram', 12.0],\n    ['Swiggy', 'Bengaluru', 10.7]\n]\n\ndf = pd.DataFrame(data, columns=['Name', 'City', 'Valuation_B'])\n\nprint(\"--- Statistical Summary ---\")\nprint(df.describe())\n\nprint(\"\\n--- Mega Unicorns (> $15B) ---\")\nprint(df[df['Valuation_B'] > 15.0])"
            },
            {
                "type": "challenge",
                "title": "\ud83d\ude80 Topic 5 Challenge",
                "content": "ENCRYPTED LOG: Add a new column called 'Valuation_INR' by multiplying 'Valuation_B' by 83.\n                            Then use .head() to view the result."
            }
        ]
    },
    {
        "id": "topic6",
        "title": "Topic 6: Basic GroupBy",
        "blocks": [
            {
                "type": "heading",
                "content": "Theoretical Framework"
            },
            {
                "type": "dialogue",
                "content": "Detective, listen to me. Infiltrating the OmniCorp server farm. The Split-Apply-Combine strategy is fundamental.\n                        1. Split data into groups based on keys (e.g., 'Crop').\n                        2. Apply a function to each group (e.g., 'Mean').\n                        3. Combine results into a new table.\n                        This allows for rapid comparative analysis between categories."
            },
            {
                "type": "heading",
                "content": "Indian Agriculture Yield Analysis"
            },
            {
                "type": "code",
                "content": "import pandas as pd\n\nagri_data = {\n    'State': ['Punjab', 'Punjab', 'Haryana', 'Haryana'],\n    'Crop': ['Wheat', 'Rice', 'Wheat', 'Rice'],\n    'Yield_Kg_Ha': [5000, 4000, 4800, 3900]\n}\ndf = pd.DataFrame(agri_data)\n\nprint(\"--- Average Yield by Crop ---\")\nprint(df.groupby('Crop')['Yield_Kg_Ha'].mean())"
            },
            {
                "type": "heading",
                "content": "Part B: Multi-Column Grouping"
            },
            {
                "type": "code",
                "content": "# Grouping by State and Crop\nprint(df.groupby(['State', 'Crop'])['Yield_Kg_Ha'].mean())"
            },
            {
                "type": "challenge",
                "title": "\ud83d\ude80 Topic 6 Challenge",
                "content": "ENCRYPTED LOG: Group the data by 'State' instead of 'Crop' and calculate the\n                            sum() of Yield to see which state produces more total food in this sample."
            }
        ]
    },
    {
        "id": "topic7",
        "title": "Topic 7: Multi-Aggregation",
        "blocks": [
            {
                "type": "heading",
                "content": "Theoretical Framework"
            },
            {
                "type": "dialogue",
                "content": "Detective, listen to me. Infiltrating the OmniCorp server farm. Often we need different summaries for different variables. For Income, we want the Average. For\n                        Literacy Rate, we might want the Maximum to see the best performing zone. Pandas allows passing\n                        a dictionary of rules to achieve this in a single pass."
            },
            {
                "type": "heading",
                "content": "Regional Economic Profiling"
            },
            {
                "type": "code",
                "content": "import pandas as pd\n\ndata = {\n    'District': ['Mumbai', 'Pune', 'Mumbai', 'Pune'],\n    'Income': [85000, 70000, 88000, 72000],\n    'Literacy': [90, 88, 91, 89]\n}\ndf = pd.DataFrame(data)\n\n# Complex Aggregation Rules\nrules = {\n    'Income': 'mean', \n    'Literacy': 'max'\n}\n\nprint(df.groupby('District').agg(rules))"
            },
            {
                "type": "challenge",
                "title": "\ud83d\ude80 Topic 7 Challenge",
                "content": "ENCRYPTED LOG: Modify the rules dictionary to calculate the 'std' (Standard\n                            Deviation) of Income. This measures inequality within the district."
            }
        ]
    },
    {
        "id": "merging",
        "title": "Topic 7b: Merging DataFrames",
        "blocks": [
            {
                "type": "heading",
                "content": "Theoretical Framework"
            },
            {
                "type": "dialogue",
                "content": "Detective, listen to me. Infiltrating the OmniCorp server farm. In economics, data often lives in separate tables (e.g., GDP data in one file, Population data in\n                        another). Merging (or Joining) is the process of combining these tables based\n                        on a common key (like 'Country' or 'Year'). This corresponds to SQL JOINS."
            },
            {
                "type": "heading",
                "content": "Joining GDP and Population Data"
            },
            {
                "type": "code",
                "content": "# Table 1: GDP\ndf_gdp = pd.DataFrame({\n    'Country': ['India', 'USA', 'China'],\n    'GDP': [3.5, 23.0, 18.0]\n})\n\n# Table 2: Population\ndf_pop = pd.DataFrame({\n    'Country': ['India', 'USA', 'Japan'],\n    'Pop': [1.4, 0.33, 0.12]\n})\n\n# Merge (Inner Join - China and Japan will be dropped as they don't match)\ndf_merged = pd.merge(df_gdp, df_pop, on='Country', how='inner')\n\nprint(df_merged)"
            },
            {
                "type": "challenge",
                "title": "\ud83d\ude80 Topic 7b Challenge",
                "content": "ENCRYPTED LOG: Change how='inner' to how='outer'. Observe how NaN\n                            values appear for countries that don't have a match."
            }
        ]
    },
    {
        "id": "topic8",
        "title": "Topic 8: Data Integrity & Cleaning",
        "blocks": [
            {
                "type": "heading",
                "content": "Theoretical Framework"
            },
            {
                "type": "dialogue",
                "content": "Detective, listen to me. Infiltrating the OmniCorp server farm. Real-world data has holes (NaNs) and errors (Outliers).\n                        Imputation fills holes with logic (mean/median/interpolation).\n                        Outlier Detection uses stats (like Z-Score or IQR) to flag suspicious values\n                        that could skew your average."
            },
            {
                "type": "heading",
                "content": "Part A: Handling Missing AQI Data (Interpolation)"
            },
            {
                "type": "code",
                "content": "import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    'Day': [1, 2, 3, 4],\n    'AQI': [350, np.nan, np.nan, 320]\n})\n\ndf['AQI_Clean'] = df['AQI'].interpolate()\nprint(df)"
            },
            {
                "type": "heading",
                "content": "Part B: String Cleaning"
            },
            {
                "type": "code",
                "content": "df_messy = pd.DataFrame({'Country': [' India ', 'usa', 'UK']})\n\n# Clean the strings\ndf_messy['Country'] = df_messy['Country'].str.strip().str.upper()\n\nprint(df_messy)"
            },
            {
                "type": "heading",
                "content": "Part C: Handling Missing Values (Fill/Drop)"
            },
            {
                "type": "code",
                "content": "df_messy = pd.DataFrame({'A': [1, 2, None], 'B': [5, None, 7]})\n# Fill missing values with 0\nprint(\"Filled:\\n\", df_messy.fillna(0))\n# Drop rows with any missing values\nprint(\"Dropped:\\n\", df_messy.dropna())"
            },
            {
                "type": "heading",
                "content": "Part D: Removing Duplicates"
            },
            {
                "type": "code",
                "content": "df_dup = pd.DataFrame({'ID': [1, 1, 2], 'Name': ['A', 'A', 'B']})\nprint(\"Unique:\\n\", df_dup.drop_duplicates())"
            },
            {
                "type": "challenge",
                "title": "\ud83d\ude80 Topic 8 Challenge",
                "content": "ENCRYPTED LOG: Filter out rows where AQI is negative (impossible values). Use logic:\n                            df[df['AQI'] >= 0]."
            }
        ]
    },
    {
        "id": "topic9",
        "title": "Topic 9: WEO Case Study",
        "blocks": [
            {
                "type": "heading",
                "content": "Theoretical Framework"
            },
            {
                "type": "dialogue",
                "content": "Detective, listen to me. Infiltrating the OmniCorp server farm. In Time Series analysis (like Vector Autoregression models), raw data is often\n                        \"noisy\" due to daily fluctuations. We use Rolling Windows to smooth out\n                        short-term noise and reveal long-term structural trends, which is essential for forecasting."
            },
            {
                "type": "heading",
                "content": "Part A: Rolling Averages (Smoothing)"
            },
            {
                "type": "code",
                "content": "import pandas as pd\n\ndf = pd.DataFrame({\n    'Month': ['Jan', 'Feb', 'Mar', 'Apr', 'May'],\n    'Inflation': [5.1, 5.3, 5.2, 6.8, 5.4]\n})\n\n# 3-Month Moving Average\ndf['Rolling_Avg'] = df['Inflation'].rolling(window=3).mean()\n\nprint(df)"
            },
            {
                "type": "heading",
                "content": "Part B: Year-over-Year Growth"
            },
            {
                "type": "code",
                "content": "df_gdp = pd.DataFrame({'GDP': [100, 105, 110, 108]})\ndf_gdp['Growth_Rate'] = df_gdp['GDP'].pct_change() * 100\nprint(df_gdp)"
            },
            {
                "type": "challenge",
                "title": "\ud83d\ude80 Topic 9 Challenge",
                "content": "ENCRYPTED LOG: Change the rolling window to 2 (`window=2`) to see a more sensitive moving\n                            average."
            }
        ]
    },
    {
        "id": "topic10",
        "title": "Topic 10: Trade Case Study",
        "blocks": [
            {
                "type": "heading",
                "content": "Theoretical Framework"
            },
            {
                "type": "dialogue",
                "content": "Detective, listen to me. Overriding the rogue quantum AI. International trade data is complex. We often use Pivot Tables to reorganize\n                        data from a \"Long Format\" (Transaction Logs) to a \"Wide Format\" (Matrix) for better readability.\n                        This helps in spotting trade deficits or surpluses visually."
            },
            {
                "type": "heading",
                "content": "Pivot Table Analysis"
            },
            {
                "type": "code",
                "content": "import pandas as pd\n\ndf = pd.DataFrame({\n    'Exporter': ['India', 'India', 'China', 'China'],\n    'Sector': ['Tech', 'Pharma', 'Tech', 'Pharma'],\n    'Value': [200, 50, 500, 20]\n})\n\n# Create Matrix\nmatrix = df.pivot_table(index='Exporter', columns='Sector', values='Value', aggfunc='sum')\n\nprint(\"--- Trade Matrix ---\")\nprint(matrix)"
            },
            {
                "type": "challenge",
                "title": "\ud83d\ude80 Topic 10 Challenge",
                "content": "ENCRYPTED LOG: Filter the original DataFrame for 'Sector' == 'Tech' before creating the\n                            Pivot Table."
            }
        ]
    },
    {
        "id": "viz",
        "title": "Advanced Visualisation",
        "blocks": [
            {
                "type": "dialogue",
                "content": "Detective, listen to me. Overriding the rogue quantum AI. While pandas handles the data, Matplotlib and Seaborn handle\n                        the aesthetics."
            },
            {
                "type": "heading",
                "content": "Part A: Seaborn Scatter Plot"
            },
            {
                "type": "code",
                "content": "import seaborn as sns\nimport matplotlib.pyplot as plt\n\n# Dummy Data\ndata = pd.DataFrame({\n    'GDP': [10, 20, 30, 40, 50],\n    'Life_Exp': [60, 65, 70, 75, 80],\n    'Region': ['A', 'A', 'B', 'B', 'C']\n})\n\n# Create Plot\nsns.scatterplot(data=data, x='GDP', y='Life_Exp', hue='Region')\nplt.title('GDP vs Life Expectancy')\nplt.show()"
            },
            {
                "type": "heading",
                "content": "Part B: Plotly Interactive Chart"
            },
            {
                "type": "code",
                "content": "import plotly.express as px\n\nfig = px.bar(data, x='Region', y='GDP', color='Region', title='Regional GDP')\nfig.show()"
            },
            {
                "type": "heading",
                "content": "Part C: Matplotlib Basics"
            },
            {
                "type": "code",
                "content": "import matplotlib.pyplot as plt\n\nyears = [2020, 2021, 2022, 2023]\ngdp = [2.5, 3.0, 3.2, 3.7]\n\nplt.figure(figsize=(8, 4))\nplt.plot(years, gdp, marker='o', linestyle='--', color='blue')\nplt.title('India GDP Trend (Trillions USD)')\nplt.grid(True)\nplt.show()"
            },
            {
                "type": "challenge",
                "title": "\ud83d\ude80 Visualisation Challenge",
                "content": "ENCRYPTED LOG: Change color='blue' to color='red' and\n                            linestyle='--' to linestyle='-' (solid line)."
            }
        ]
    },
    {
        "id": "kendrick",
        "title": "Decoding the Narrative: A Kendrick Lamar Study",
        "blocks": [
            {
                "type": "heading",
                "content": "Part 1: Simple Reversal (Slicing)"
            },
            {
                "type": "code",
                "content": "# The DAMN. Hypothesis: Order changes Meaning\ntracks = [\"BLOOD.\", \"DNA.\", \"YAH.\", \"ELEMENT.\", \"FEEL.\", \"LOYALTY.\", \"PRIDE.\", \"HUMBLE.\", \"LUST.\", \"LOVE.\", \"XXX.\", \"FEAR.\", \"GOD.\", \"DUCKWORTH.\"]\n\n# Original Narrative (1 to 14)\nprint(\"--- Forward Narrative (Wickedness leads to Weakness) ---\")\nprint(tracks)\n\n# Collectors Edition Narrative (14 to 1)\nprint(\"\\n--- Reversed Narrative (Weakness leads to Wickedness) ---\")\nprint(tracks[::-1])"
            },
            {
                "type": "heading",
                "content": "Part 2: Capstone Analysis - Quantifying the Arc"
            },
            {
                "type": "code",
                "content": "import pandas as pd\nimport matplotlib.pyplot as plt\n\n# 1. Ingestion: Define Data (Module 1/5)\n# Score: 100 = Pure Aggression (Wickedness), 0 = Pure Contemplation (Weakness)\ndata = {\n    'Track': [\"BLOOD.\", \"DNA.\", \"YAH.\", \"ELEMENT.\", \"FEEL.\", \"LOYALTY.\", \"PRIDE.\", \"HUMBLE.\", \"LUST.\", \"LOVE.\", \"XXX.\", \"FEAR.\", \"GOD.\", \"DUCKWORTH.\"],\n    'Aggression_Score': [20, 100, 30, 80, 40, 50, 30, 90, 60, 20, 85, 10, 50, 40]\n}\n\n# 2. DataFrame Creation (Module 5)\ndf_forward = pd.DataFrame(data)\n\n# 3. Analysis: Calculate Narrative Flow using Rolling Window (Module 9)\n# We use a window of 3 tracks to see the \"moving sentiment\"\ndf_forward['Narrative_Arc'] = df_forward['Aggression_Score'].rolling(window=3).mean()\n\n# 4. Transformation: Create Reverse Data (Module 3)\n# We flip the dataframe upside down\ndf_reverse = df_forward.iloc[::-1].reset_index(drop=True)\ndf_reverse['Narrative_Arc'] = df_reverse['Aggression_Score'].rolling(window=3).mean()\n\nprint(\"--- Forward Arc (First 5 Steps) ---\")\nprint(df_forward[['Track', 'Narrative_Arc']].head())\n\nprint(\"\\n--- Reverse Arc (First 5 Steps) ---\")\nprint(df_reverse[['Track', 'Narrative_Arc']].head())"
            },
            {
                "type": "heading",
                "content": "Visualising the Sentiment Trajectory"
            },
            {
                "type": "dialogue",
                "content": "Detective, listen to me. Overriding the rogue quantum AI. Notice how the Blue Line (Forward) generally trends downwards\n                        (High Aggression -> Low), while the Red Line (Reverse) trends upwards? This visually confirms\n                        the album's dual narrative structure."
            },
            {
                "type": "challenge",
                "title": "\ud83d\ude80 Storytelling Challenge",
                "content": "ENCRYPTED LOG: Create a list of 5 major life events in chronological order. Reverse them\n                            using slicing to see if it tells a \"Benjamin Button\" style story."
            }
        ]
    },
    {
        "id": "grammy",
        "title": "Capstone: Grammy Awards Analytics",
        "blocks": [
            {
                "type": "heading",
                "content": "The \"EGOT\" Trajectory Analysis"
            },
            {
                "type": "dialogue",
                "content": "Detective, listen to me. Overriding the rogue quantum AI. In this advanced module, we combine every skill learned so far to analyze the relationship\n                        between Critical Acclaim (Grammy Wins) and Commercial Success\n                        (Global Streams). We will create a complex multi-dimensional dataset and visualize it using a\n                        Bubble Chart."
            },
            {
                "type": "heading",
                "content": "Advanced Concepts Applied"
            },
            {
                "type": "heading",
                "content": "Code Implementation"
            },
            {
                "type": "code",
                "content": "import pandas as pd\nimport numpy as np\n\n# 1. Complex Data Ingestion (Simulated Dictionary)\ngrammy_data = {\n    'Artist': ['Beyonc\u00e9', 'Taylor Swift', 'Kendrick Lamar', 'Adele', 'Billie Eilish', 'Harry Styles'],\n    'Genre': ['R&B', 'Pop', 'Hip-Hop', 'Pop', 'Alt', 'Pop'],\n    'Grammy_Wins': [32, 14, 17, 16, 9, 3],\n    'Global_Streams_B': [35.0, 50.0, 20.0, 25.0, 28.0, 22.0], # Billions\n    'Metacritic_Avg': [88, 85, 94, 80, 86, 78]\n}\ndf = pd.DataFrame(grammy_data)\n\n# 2. Advanced Feature Engineering: \"Legend Index\"\n# Formula: (Wins * 0.6) + (Streams * 0.4) -> Weighing Prestige more than Popularity\ndf['Legend_Index'] = (df['Grammy_Wins'] * 0.6) + (df['Global_Streams_B'] * 0.4)\n\n# 3. Normalization (Scaling Streams to compare with scores)\n# Scale streams to 0-100 range for fair comparison with Metacritic\ndf['Streams_Scaled'] = (df['Global_Streams_B'] / df['Global_Streams_B'].max()) * 100\n\nprint(\"--- Artist Power Ranking (Top 3) ---\")\nprint(df.sort_values('Legend_Index', ascending=False).head(3))"
            },
            {
                "type": "heading",
                "content": "Visualising Success: Critical vs. Commercial"
            },
            {
                "type": "dialogue",
                "content": "X-Axis: Commercial Success (Streams)\nY-Axis: Critical Acclaim (Metacritic Score)\nBubble Size: Total Grammy Wins (Prestige)\nColor: Genre"
            },
            {
                "type": "challenge",
                "title": "\ud83d\ude80 Capstone Challenge",
                "content": "ENCRYPTED LOG: Modify the 'Legend_Index' formula to weigh Commercial Success (Streams)\n                            higher (e.g., 0.8) than Wins. How does the ranking change?"
            }
        ]
    },
    {
        "id": "govdata",
        "title": "Real-World Pipelines",
        "blocks": [
            {
                "type": "heading",
                "content": "Fetching FRED API Data"
            },
            {
                "type": "code",
                "content": "import pandas as pd\n\n# Federal Reserve Economic Data (FRED) URL\nurl = \"https://fred.stlouisfed.org/graph/fredgraph.csv?id=CPIAUCSL\"\n\ntry:\n    # Read directly from internet\n    df = pd.read_csv(url, parse_dates=['DATE'], index_col='DATE')\n    print(df.tail(3))\nexcept:\n    print(\"Error: Unable to fetch data. Check internet connection.\")"
            },
            {
                "type": "challenge",
                "title": "\ud83d\ude80 Pipeline Challenge",
                "content": "ENCRYPTED LOG: If you can't reach the URL, try creating a dummy dictionary with Date and CPI\n                            keys and convert it to a DataFrame manually."
            }
        ]
    },
    {
        "id": "faq",
        "title": "Archive 1: Basic Syntax & Types",
        "blocks": [
            {
                "type": "heading",
                "content": "Variables & Data Types"
            },
            {
                "type": "dialogue",
                "content": "These are the building blocks of reality in the Nexus. Strings, Integers, Floats, and Booleans. You cannot hack the mainframe if you don't understand the native tongue."
            },
            {
                "type": "intel",
                "content": "Variables are like containers holding specific types of data."
            },
            {
                "type": "code",
                "content": "agent_name = 'Captain Code' # String\nclearance_level = 5 # Integer\nsuccess_rate = 99.9 # Float\nis_rogue = False # Boolean"
            }
        ]
    },
    {
        "id": "glossary",
        "title": "Archive 2: Control Flow",
        "blocks": [
            {
                "type": "heading",
                "content": "Loops and Conditionals"
            },
            {
                "type": "dialogue",
                "content": "The city runs on logic gates and endless cycles. If a condition is met, execute the protocol. Otherwise, loop until the target is found."
            },
            {
                "type": "intel",
                "content": "'if' statements direct the flow of logic. 'for' and 'while' loops repeat actions."
            },
            {
                "type": "code",
                "content": "if is_rogue:\n    initiate_lockdown()\nelse:\n    grant_access()\n\nfor i in range(5):\n    scan_sector(i)"
            }
        ]
    },
    {
        "id": "references",
        "title": "Archive 3: Data Structures",
        "blocks": [
            {
                "type": "heading",
                "content": "Lists & Dictionaries"
            },
            {
                "type": "dialogue",
                "content": "You can't carry everything in your pockets. You need structured storage. Lists for ordered sequences, Dictionaries for key-value pair mapping."
            },
            {
                "type": "intel",
                "content": "Lists use square brackets []. Dictionaries use curly braces {} with key:value mapping."
            },
            {
                "type": "code",
                "content": "suspects = ['Dr. Chaos', 'Cipher', 'Null']\n\nagent_profile = {\n    'name': 'Captain Code',\n    'rank': 'Senior',\n    'id': 1042\n}"
            }
        ]
    },
    {
        "id": "learning",
        "title": "Archive 4: Functions",
        "blocks": [
            {
                "type": "heading",
                "content": "Modular Execution"
            },
            {
                "type": "dialogue",
                "content": "Don't repeat yourself, Detective. If you need to perform an action multiple times, package it into a callable function. It saves time and prevents catastrophic system errors."
            },
            {
                "type": "intel",
                "content": "Functions are defined using the 'def' keyword followed by the function name and parentheses."
            },
            {
                "type": "code",
                "content": "def decrypt_file(file_path, key):\n    print(f'Decrypting {file_path} with key {key}')\n    # decryption logic here\n    return True\n\nstatus = decrypt_file('nexus_core.dat', 4096)"
            }
        ]
    }
];
