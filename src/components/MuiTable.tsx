import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;

// https://mockaroo.com/
const tableData = [
  {
    id: 1,
    first_name: "Jayson",
    last_name: "Kippie",
    email: "jkippie0@google.com.br",
    gender: "Male",
    ip_address: "234.244.28.88",
  },
  {
    id: 2,
    first_name: "Zebedee",
    last_name: "Persich",
    email: "zpersich1@un.org",
    gender: "Male",
    ip_address: "235.53.236.95",
  },
  {
    id: 3,
    first_name: "Hansiain",
    last_name: "Paling",
    email: "hpaling2@livejournal.com",
    gender: "Male",
    ip_address: "30.220.213.77",
  },
  {
    id: 4,
    first_name: "Igor",
    last_name: "Poole",
    email: "ipoole3@huffingtonpost.com",
    gender: "Male",
    ip_address: "173.92.205.65",
  },
  {
    id: 5,
    first_name: "Griff",
    last_name: "Coogan",
    email: "gcoogan4@youtu.be",
    gender: "Male",
    ip_address: "111.39.223.29",
  },
  {
    id: 6,
    first_name: "Stacy",
    last_name: "Helliar",
    email: "shelliar5@tripod.com",
    gender: "Male",
    ip_address: "21.242.202.130",
  },
  {
    id: 7,
    first_name: "Barbi",
    last_name: "Brimilcome",
    email: "bbrimilcome6@noaa.gov",
    gender: "Female",
    ip_address: "8.194.23.1",
  },
  {
    id: 8,
    first_name: "Sella",
    last_name: "Lievesley",
    email: "slievesley7@fema.gov",
    gender: "Non-binary",
    ip_address: "187.246.51.20",
  },
  {
    id: 9,
    first_name: "Fay",
    last_name: "Lammie",
    email: "flammie8@wunderground.com",
    gender: "Female",
    ip_address: "18.167.94.242",
  },
  {
    id: 10,
    first_name: "Tyrus",
    last_name: "Gartenfeld",
    email: "tgartenfeld9@plala.or.jp",
    gender: "Male",
    ip_address: "79.23.153.56",
  },
];
