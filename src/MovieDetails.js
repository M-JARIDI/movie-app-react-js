import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import htmlParser from "html-react-parser";


export default function MovieDetails({movie}) {

  const movieDetails = [
      {label: "name", value:  movie.name ? movie.name : movie.show.name ? movie.show.name : ""},
      {label: "score", value: movie.score ? Number(movie.score).toFixed(2) : ""},
      {label: "genre", value: movie.genres ? movie.genres : movie.show.genres ? movie.show.genres : ""},
      {label: "language", value: movie.language ? movie.language : movie.show.language ? movie.show.language : ""},
      {label: "status", value: movie.status ? movie.status : movie.show.status ? movie.show.status : ""},
      {label: "summary", value: movie.summary ? movie.summary : movie.show.summary ? movie.show.summary : ""}
  ];

  return (
    <div style={{marginLeft:"20px", width:"40rem",}}>
        <TableContainer component={Paper} style={{border:"1px solid",borderRadius:"5%", boxShadow: "0 0px 10px 3px rgba(0, 0, 0, 0.3)"}}>
            <Table aria-label="simple table">
                <TableBody>
                    {movieDetails.map((itemDetail, index) => (
                        <TableRow key={index}>
                            <TableCell><b>{itemDetail.label}</b></TableCell>
                            {itemDetail.label !== "summary" ?
                                <TableCell>{itemDetail.value}</TableCell>
                            :
                                <TableCell>{htmlParser(String(itemDetail.value).valueOf())}</TableCell>
                            }
                            
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  );
}
