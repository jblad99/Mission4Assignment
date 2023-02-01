using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4Assignment.Models
{
    // This is the model for the Grade Calculator page, which accepts different inputs and outputs grade calculations.
    public class GradeCalculatorModel
    {
        [Required]
        [Range(0, 100, ErrorMessage = "Assignments grade must be between 0% and 100%")]
        public int Assignments { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Group grade must be between 0% and 100%")]
        public int Group { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Quizzes grade must be between 0% and 100%")]
        public int Quizzes { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Midterm Exam grade must be between 0% and 100%")]
        public int Midterm { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Final Exam grade must be between 0% and 100%")]
        public int Final { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Intex grade must be between 0% and 100%")]
        public int Intex { get; set; }

    }
}
