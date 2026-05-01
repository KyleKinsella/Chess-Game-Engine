package piece

type Piece interface {
    PieceName() string
    PieceInfo(left, right, up, down, currentPos int) []int
}

type Rook struct {
    Name string
}

func (r *Rook) PieceName() string {return r.Name}
func (r *Rook) PieceInfo(left, right, up, down, currentPos int) []int {return []int{}}

type L interface {
    LShape(adj []int) bool
}

type Horse struct {
    Name string
}

func (h *Horse) PieceName() string {return h.Name}
func (h *Horse) PieceInfo(left, right, up, down, currentPos int) []int {return []int{}}
func (h *Horse) LShape(adj []int) bool {return false}

type Diagonal interface {
   IsDiagonal(adj []int) bool
}

type Bishop struct {
    Name string
}

func (b *Bishop) PieceName() string {return b.Name}
func (b *Bishop) PieceInfo(left, right, up, down, currentPos int) []int {return []int{}}
func (b *Bishop) IsDiagonal(adj []int) bool {return false}

type Queen struct {
    Name string
}

func (q *Queen) PieceName() string {return q.Name}
func (q *Queen) PieceInfo(left, right, up, down, currentPos int) []int {return []int{}}
func (q *Queen) IsDiagonal(adj []int) bool {return false}

type King struct {
    Name string
}

func (k *King) PieceName() string {return k.Name}
func (k *King) PieceInfo(left, right, up, down, currentPos int) []int {return []int{}}
func (k *King) IsDiagonal(adj []int) bool {return false}

type Forward interface {
    GoForward() int
}

type Pawn struct {
    Name string
}

func (p *Pawn) PieceName() string {return p.Name}
func (p *Pawn) PieceInfo(left, right, up, down, currentPos int) []int {return []int{}}
func (p *Pawn) GoForward() int {return 1}
