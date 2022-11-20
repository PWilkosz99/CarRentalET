using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Data
{
    public class Payment
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public string CardNumber { get; set; }
        public DateOnly CardDate { get; set; }
        public int CVV { get; set; }
        public string CardOwnerName { get; set; }
    }
}
